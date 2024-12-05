<template>
    <div>
      <h1>Document: {{ name }}</h1>
      <div v-html="documentContent"></div>
      <button @click="goBack">Back</button>
    </div>
  </template>
  
  <script>
  import { apiService } from '../api/apiService';
  
  export default {
    props: ['name'],
    data() {
      return {
        documentContent: '',
      };
    },
    async created() {
      try {
        // Vérifie si le contenu HTML a été sauvegardé dans localStorage
        const storedHTML = localStorage.getItem('searchedDocumentHTML');
        if (storedHTML) {
          this.documentContent = storedHTML;
          localStorage.removeItem('searchedDocumentHTML'); // Nettoyage
        } else {
          this.documentContent = await apiService.getRecetteContent(this.name);
        }
      } catch (error) {
        alert(error.message);
      }
    },
    methods: {
      goBack() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  div[v-html] {
    border: 1px solid #ccc;
    padding: 1em;
    margin-top: 1em;
  }
  </style>
  