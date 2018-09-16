<template>
    <div id="app">
      {{clients ? 'success' : 'no data'}}
    </div>
</template>

<script>
/* eslint-disable */
import request from './api/request';

export default {
  name: 'app',
  data() {
    return {
      clients: null
    }
  },
   mounted() {
    this.clients = request()
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
