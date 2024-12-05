<template>
    <div class="login">
      <h1>Login</h1>
      <form class="form-login" @submit.prevent="login">
        <input class="input-style" v-model="username" placeholder="Enter your username" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import Cookies from 'js-cookie';
  
  export default {
    data() {
      return {
        username: '',
      };
    },
    methods: {
      login() {
        Cookies.set('username', this.username);
        this.$router.push('/'); // Redirige vers la page d'accueil après login
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }

  .form-login {
    display: flex;
    gap: 0.5rem;
  }

  .input-style {
    border: 0px;
  }

  button {
    background-color: #405cf5;
    color: #fff;
  }
  </style>
  