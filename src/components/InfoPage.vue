<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
  
            <h1 class="text-h2 font-weight-bold">The Rundown</h1>
            <div class="py-3" />
            <p class="text-p font-weight-regular">The application will analyze audio and make meaningful video using the information from that audio.</p>
            <div class="py-1" />
            <p class="text-p font-weight-regular">This application is originally intended to be used for mapping to room lighting, but could be used as a screen saver, desktop background, or just as pretty visuals to go along with music.</p>
            <div class="py-6" />

            <p class="text-p font-weight-medium">For more detailed info on how to run and contribute, go to our Github.</p>

            <v-btn
                color=#ffdf32
                href="https://github.com/BCaven/creativity-optional"
                min-width="250"
                rel="noopener noreferrer"
                size="x-large"
                target="_blank"
                variant="flat"
                >Github Repo</v-btn>
            <div class="py-6" />

        <v-sheet
            color="#21212c"
            variant="flat"
            width="100%"
            rounded
        >
            <div class="py-3" />
            <v-card-title class="text-h4 font-weight-bold">Features</v-card-title>
            <div class="py-3" />
            <v-row class="d-flex align-center justify-center">
                <v-col cols="3">
                    <v-card
                        color="#3253ff"
                        variant="flat"
                        class="mx-auto"
                        height="200"
                    >
                        <v-card-title class="text-h6 font-weight-bold">Analyze music</v-card-title>
                        <v-card-item>Use librosa library to get interesting metadata by applying music theory to audio.</v-card-item>
                    </v-card>

                </v-col>

                <v-col cols="3">
                    <v-card
                        color="#3253ff"
                        variant="flat"
                        class="mx-auto"
                        height="200"
                    >
                        <v-card-title class="text-h6 font-weight-bold">Take in system audio</v-card-title>
                        <v-card-item>Take in real-time system audio to have reactive videos</v-card-item>
                    </v-card>
                </v-col>

                <v-col cols="3">
                    <v-card
                        color="#3253ff"
                        variant="flat"
                        class="mx-auto"
                        height="200"
                    >
                        <v-card-title class="text-h6 font-weight-bold">Meaningful Visuals</v-card-title>
                        <v-card-item>Reactive videos usually take in only audio amplitude. While that works passably, this project uses frequency data and music theory info on top of amplitude info.</v-card-item>
                    </v-card>
                </v-col>
            </v-row>
            <div class="py-3" />
        </v-sheet>


        <div class="py-3" />

        <v-sheet
            color="#21212c"
            variant="flat"
            width="100%"
            rounded
        >
            <div class="py-3" />
            <v-card-title class="text-h4 font-weight-bold">Updates</v-card-title>
            <div class="py-3" />
            <v-row class="d-flex align-center justify-center">

                <v-col cols="9">
                    <v-card
                        color="#3253ff"
                        variant="flat"
                        class="mx-auto"
                    >
                        <v-card-title class="text-h6 font-weight-bold">April-15-2024</v-card-title>
                        <v-card-item>
                            <ul>
                                <li>
                                    Librosa did not want to cooperate, making it work in real-time would just not be feasible. Currently deciding how to implement in-depth analysis of music.
                                </li>
                                <li>
                                    Can currently react to sound amplitude, reacting to frequency data is in the works right now...
                                </li>
                                <li>
                                    <b>Simulation</b> tab in website now has video demo.
                                </li>

                            </ul>
                            <br>
                            Public release of Creativity Optional Project forthcoming. Stay tuned!
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
            <div class="py-5" />
        </v-sheet>

            <div class="py-7" />
        </v-responsive>

  
    </v-container>
  </template>
  
  <script setup>
    //
  </script>
  