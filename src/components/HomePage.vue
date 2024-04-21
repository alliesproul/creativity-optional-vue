const routes = [
  { path: '/contact', component: ContactPage },
  { path: '/info', component: InfoPage },
  { path: '/simulation', component: SimulationPage },
]

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="@/assets/logo.png" />

      <div class="text-body-1 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Creativity Optional</h1>

      <div class="py-4" />

      <p class="text-h7 font-weight-medium">We are a team making an open source project to turn audio into meaningful and (hopefully) pretty video!</p>

      <div class="py-9" />


      <v-sheet
            color="#21212c"
            variant="flat"
            width="100%"
            rounded
        >
            <div class="py-3" />
            <v-card-title class="text-h4 font-weight-bold">Announcements</v-card-title>
            <div class="py-3" />
            <v-row class="d-flex align-center justify-center">

                <v-col cols="9">
                    <v-card
                        color="#ffdf32"
                        variant="flat"
                        class="mx-auto"
                    >
                        <v-card-title class="text-h6 font-weight-bold">Public Release!</v-card-title>
                        <v-card-item>
                          Creativity Optional is now available to the unwashed masses! Contributors welcome! Here's an introductory video!<br>
                          <video width="800" controls>
                            <source src="@/assets/intro.mp4">
                            Your browser does not support the video tag.
                          </video><br>
                          <a href="https://discord.com/invite/qN9BhGK36U">Discord</a><br>
                          <a href="https://github.com/BCaven/creativity-optional">GitHub</a>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
            <div class="py-5" />
        </v-sheet>


      <div class="py-9" />

      <h2 class="text-h3 font-weight-bold">Explore</h2>

      <div class="py-3" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="3">
          <v-card color="#3253ff">
            <v-card-item>To see what we have so far:</v-card-item>
            <RouterLink to="/simulation">SIMULATIONe</RouterLink>
              <v-card-title>SIMULATION</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card color="#3253ff">
            <v-card-item>For more info on our project:</v-card-item>
            <RouterLink to="/info">INFORMATION</RouterLink>
              <v-card-title>INFO</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card color="#3253ff">
            <v-card-item>If you want to contact us:</v-card-item>
            <RouterLink to="/contact">CONTACT</RouterLink>
              <v-card-title>CONTACT</v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <div class="py-4" />
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>
