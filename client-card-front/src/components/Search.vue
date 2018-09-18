<template>
  <md-card md-with-hover>
    <md-field>
      <label>Search Bar</label>
      <md-input v-model="input"></md-input>
    </md-field>
  </md-card>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    input: null,
  })
}
</script>

<style scoped>
  .md-card {
    width: 320px;
    display: inline-block;
    vertical-align: top;
    padding: 0 15px;
    margin-bottom: 10px;
  }
  .input {
    width: 100%;
  }
  .md-field {
    margin: 0;
    padding: 10px 0;
  }
</style>