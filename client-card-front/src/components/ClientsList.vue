<template>
  <ul v-if="clients">
    <li v-for="client in clients" :key='client.contact.phone'>
      {{client.general.firstName}} {{client.general.lastName}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ClientsList',
  props: {
    clients: null || Array
  }
}
</script>
