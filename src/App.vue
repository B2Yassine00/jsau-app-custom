<template>
  <div id="app">
    <div class="my-navbar">
      <router-link to="/">Documents</router-link>
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Styles globaux */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}

.my-navbar {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
}

.my-navbar a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

.my-navbar a.router-link-exact-active {
  color: #35495e;
}
</style>
