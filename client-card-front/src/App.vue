<template>
    <div id="app">
      <ClientsList v-bind:clients='this.clients'/>
    </div>
</template>

<script>
/* eslint-disable */
import request from './api/request';
import ClientsList from './components/ClientsList'
export default {
  name: 'app',
  components: {
    ClientsList
  },
  data() {
    return {
      clients: []
    }
  },
  async mounted() {
    this.clients = await request();
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* display: flex; */
  width: 80vw;
  height: 80vh;
}
</style>
