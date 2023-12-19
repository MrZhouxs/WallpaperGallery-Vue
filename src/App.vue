<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #1B1B1B;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #999999;
  margin: 0;
  padding: 0;
}

html {
  /*background-color: #1c1c1c;*/
}
</style>
