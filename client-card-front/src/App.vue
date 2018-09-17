<template>
    <div id="app">
      <ClientsList v-bind:clients='this.clients' v-on:select = 'chosen'/>
      <ClientCard v-bind:client='this.chosenClient'/>
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
    chosen: function(id) {
      this.chosenClient = this.clients.find(el => el.id === id)
      console.log(this.chosenClient)
    },
  },
  async mounted() {
    this.clients = await request();
  },
}
</script>

<style>
#app {
  width: 100vw;
  height: 70vh;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
