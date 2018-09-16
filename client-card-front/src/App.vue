<template>
    <div id="app">
      <ClientsList v-bind:clients='this.clients' v-bind:chosen='chosen'/>
      <ClientCard/>
    </div>
</template>

<script>
/* eslint-disable */
import request from './api/request';
import ClientsList from './components/ClientsList'
import ClientCard from './components/ClientCard'
export default {
  name: 'app',
  components: {
    ClientsList,
    ClientCard,
  },
  data() {
    return {
      clients: [],
      chosenClient: null
    }
  },
  methods: {
    chosen: function(client) {
      this.chosenClient = client
    }
  },
  async mounted() {
    this.clients = await request();
  },
}
</script>

<style>
#app {
  width: 60vw;
  height: 60vh;
  padding-top: 100px;
  display: flex;
  justify-content: center;
}
</style>
