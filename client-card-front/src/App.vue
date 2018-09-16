<template>
  <div id="app">
    <md-card>
      <md-card-header>
        header
      </md-card-header>
      <md-card-content>
        content
      </md-card-content>
      <md-card-content>
        content2
      </md-card-content>
      <md-card-actions>
        <md-button>click</md-button>
      </md-card-actions>
    </md-card>
    <md-list class="md-triple-line">
      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>Ali Connors</span>
          <span>Brunch this weekend?</span>
          <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>

export default {
  name: 'app',
  // components: {
    
  // }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* display: flex; */
  width: 80vw;
  height: 80vh;
}
</style>
