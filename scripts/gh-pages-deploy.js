/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");

(async () => {
    const branch = await execa("git", ["branch",  "--show-current"]);
    console.log("branch: " + branch.stdout);
    // make sure we are on the main branch
    if (branch.stdout != "main") {
        console.log("Please run this command from the main branch");
        process.exit(1);
    }
    try {
        await execa("git", ["checkout", "main"]);
        await execa("git", ["checkout", "--orphan", "gh-pages"]);
        // eslint-disable-next-line no-console
        console.log("Building started...");
        await execa("npm", ["run", "build"]);
        // Understand if it's dist or build folder
        const folderName = fs.existsSync("dist") ? "dist" : "build";
        await execa("git", ["--work-tree", folderName, "add", "--all"]);
        await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
        console.log("Pushing to gh-pages...");
        await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
        await execa("rm", ["-r", folderName]);
        await execa("git", ["checkout", "-f", "main"]);
        await execa("git", ["branch", "-D", "gh-pages"]);
        console.log("Successfully deployed, check your settings");
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
        // if we fail we want to go back to the branch we started on
        await execa("git", ["branch", "-f", branch.stdout]);
        process.exit(1);
    }
})();