<template>
  <v-card color=#e9e9e9>
    <v-card-title class="text-center">
      <h1 class="font-weight-bold text-h2 text-title" color=#21212c>Creativity Optional</h1>
    </v-card-title>


  <v-tabs v-model="tab" bg-color=#21212c color=#ffdf32 grow>
      <v-tab v-for="item in items" :key="item" :value="item">
        {{ item }}
      </v-tab>
  </v-tabs>
  
  <v-window v-model="tab">
    <!-- Home Page -->
    <v-window-item value="Home">
      <HomePage></HomePage>
    </v-window-item>

    <!-- Simulation Page -->
    <v-window-item value="Simulation">
      <SimulationPage></SimulationPage>
    </v-window-item>

    <!-- Info Page -->
    <v-window-item value="Info">
      <InfoPage></InfoPage>
    </v-window-item>

    <!-- About / Contact Page -->
    <v-window-item value="Contact">
      <ContactPage></ContactPage>
    </v-window-item>

  </v-window>
</v-card>
</template>

<script setup>
import HomePage from './components/HomePage.vue';
import SimulationPage from './components/SimulationPage.vue';
import InfoPage from './components/InfoPage.vue';
import ContactPage from './components/ContactPage.vue';

</script>

<script>
export default {
  data() {
    return {
      tab: 'directory',
      items: ['Home', 'Simulation', 'Info', 'Contact'],
    }
  }
}
</script>

<style>
body {
  background-color: #21212c;
}

.text-title {
  color: #3253ff;
}

</style>