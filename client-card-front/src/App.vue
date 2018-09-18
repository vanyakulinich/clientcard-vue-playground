<template>
    <div id="app">
      <div class='clientList'>
        <Search/>
        <ClientsList v-bind:clients='this.clients' v-on:select = 'chosen'/>
      </div>
      <ClientCard v-bind:client='this.chosenClient' class='card'/>
    </div>
</template>

<script>
/* eslint-disable */
import request from './api/request';
import ClientsList from './components/ClientsList'
import ClientCard from './components/ClientCard'
import Search from './components/Search'

export default {
  name: 'app',
  components: {
    ClientsList,
    ClientCard,
    Search
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
    width: 90%;
    height: 80vh;
    padding-top: 100px;
    display: flex;
    margin: 0 auto;
  }
  .clientList, .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .clientList {
    width: 40%;
    height: 100%;
  }
  .card {
    width: 60%;
    height: 100%;
  }
</style>
