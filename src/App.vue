<template>
  <div id="app">
    <div id="nav" v-if="false">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  html {
    background-image: url('assets/photo-1489573280374-2e193c63726c.jpg');
    background-attachment: fixed;
    background-color: #828282 !important;
    background-blend-mode: color-burn;
  }

  body {
    margin: 0;
    padding: 0;
  }
  html,body {
    width: 100%;
    min-height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 1280px;
    margin: 0 auto;
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
        /*color: #fff;*/
      }
    }
  }
</style>
