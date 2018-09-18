<template>
  <md-card md-with-hover>
      <md-ripple class='container'>
        <md-card-header>
          <div class="md-title">Client Card</div>
          <div class="md-subhead">
            {{ client ? 
                `${client.general.firstName} ${client.general.lastName}` :
                `Please choose a client`
            }}
          </div>
        </md-card-header>
        <md-card-content v-if="client">
          <img :src='client.general.avatar'/> 
        </md-card-content>
      </md-ripple>
    </md-card>
  
    
</template>

<script>
export default {
  name: 'ClientCard',
  props: {
    client: Object
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
   
</style>



