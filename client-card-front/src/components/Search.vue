<template>
  <md-card md-with-hover>
    <md-field>
      <label>Search Bar</label>
      <md-input v-on:input="currentInput"></md-input>
    </md-field>
  </md-card>
</template>

<script>
export default {
  name: 'Search',
  methods: {
    currentInput: function(e) {
       this.$emit('input', e.toLowerCase())
    }
  }
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