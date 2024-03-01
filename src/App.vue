<template>
  <v-card color="grey">
    <v-card-title class="text-center">
      <h1 class="font-weight-bold text-h2 text-title" color="yellow">Creativity Optional</h1>
    </v-card-title>


  <v-tabs v-model="tab" bg-color="grey" color="red" grow>
      <v-tab v-for="item in items" :key="item" :value="item">
        {{ item }}
      </v-tab>
  </v-tabs>
  
  <v-window v-model="tab">
    <!-- Home Page -->
    <v-window-item value="Home">
      <HelloWorld></HelloWorld>
    </v-window-item>

    <!-- Simulation Page -->
    <v-window-item value="Simulation">
    </v-window-item>

    <!-- Info Page -->
    <v-window-item value="Info">

    </v-window-item>

    <!-- About / Team Page -->
    <v-window-item value="Team">

    </v-window-item>

  </v-window>
</v-card>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';

</script>

<script>
export default {
  data() {
    return {
      tab: 'gamers',
      items: ['Home', 'Simulation', 'Info', 'Team'],
    }
  }
}
</script>

<style>
body {
  background-color: grey;
}

.text-title {
  color: red;
}

</style>