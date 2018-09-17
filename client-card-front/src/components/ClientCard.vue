<template>
  <div v-if="client">
    <img :src='client.general.avatar'/>
    {{client.general.firstName}} {{client.general.lastName}}
  </div>
</template>

<script>
export default {
  name: 'ClientCard',
  props: {
    client: Object
  }
}
</script>
