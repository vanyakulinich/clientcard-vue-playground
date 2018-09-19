<template>
  <md-card md-with-hover>
      <md-ripple class='container'>
        <md-card-header>
          <div class="md-subhead">
            Client Card
          </div>
          <div class="md-title">
            {{ client ? 
                `${client.general.firstName} ${client.general.lastName}` :
                `Please choose a client`
            }}
          </div>
        </md-card-header>
        <md-card-content v-if="client">
          <md-avatar class="md-large">
            <img :src='client.general.avatar'/> 
          </md-avatar>
          <!-- <md-divider></md-divider> -->
          <p class="job"><AccountIcon/> {{client.job.title}}</p>
          <p class="company"><DomainIcon/> {{client.job.company}}</p>
          <md-divider></md-divider>
          <p><EmailIcon/> {{client.contact.email}}</p>
          <p><PhoneIcon/> {{client.contact.phone}}</p>
          <md-divider></md-divider>
          <div class='address'>
            <MapMarkerIcon/>
            <ul>
              <li v-for="item in Object.values(client.address)" v-bind:key='item'>{{item}}</li>
            </ul>
          </div>
          
        </md-card-content>
      </md-ripple>
    </md-card>
  
    
</template>

<script>
import EmailIcon from "vue-material-design-icons/Email.vue"
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import AccountIcon from 'vue-material-design-icons/Account.vue'
import DomainIcon from 'vue-material-design-icons/Domain.vue'
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue'
 
export default {
  name: 'ClientCard',
  components: {
    EmailIcon,
    PhoneIcon,
    AccountIcon,
    DomainIcon,
    MapMarkerIcon
  },
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
  .md-title {
    font-size: 33px;
  }
  .md-divider {
    background-color: rgba(170, 159, 159, 0.6);
  }
  .md-large {
    min-height: 150px;
    min-width: 150px;
    border-radius: 50%;
  }
  .md-subhead, .md-card-content {
    text-align: center;
  }
  .md-card-content {
    font-family: Roboto,Noto Sans,-apple-system,BlinkMacSystemFont,sans-serif;;
  }
  .job {
    font-size: 25px;
  }
  .company {
    font-size: 18px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .material-design-icon {
    align-self: none;
  }
  .address {
    display: flex;
    justify-content: center;
    font-size: 13px;
    margin-top: 15px;
  }
   
</style>



