<template>
  <md-card md-with-hover class='md-scrollbar'>
    <md-list class="md-triple-line md-scrollbar" v-if="clients">
      <md-list-item 
        v-for="client in clients" 
        :key='client.id'
        @click='$emit("select", client.id)'
      >
        <md-avatar>
          <img :src='client.general.avatar' alt="Avatar">
        </md-avatar>
        <div class="md-list-item-text">
          <span>{{client.general.firstName}} {{client.general.lastName}}</span>
          <span>{{client.job.company}}</span>
          <span>{{client.job.title}}</span>
        </div>
        <md-divider class="md-inset"></md-divider>
        </md-list-item>
    </md-list>
  </md-card>
</template>

<script>
export default {
  name: 'ClientsList',
  props: {
    clients: null || Array
  },
}
</script>

<style scoped>
  .md-list, .md-card {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
    height: 100%;
    max-width: 400px;
    overflow: auto;
  }
  .md-list::-webkit-scrollbar {
    background-color: rgba(170, 159, 159, 0.6)
  }
  .md-list::-webkit-scrollbar-thumb {
    background-color: rgba(48, 48, 48, 0.5)
  }

</style>

