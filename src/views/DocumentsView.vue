<template>
  <div>
    <h1>Recettes</h1>
    <!-- Barre de recherche -->
    <div style="margin-bottom: 1rem; text-align: center;">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search documents..."
        style="padding: 0.5rem; width: 60%;"
        @input="searchDocuments"
      />
    </div>

    <!-- Passe les documents filtrés au composant -->
    <DocumentTable :documents="filteredDocuments" />

    <div style="display: flex; justify-content: center; align-items: center; padding: 1rem;">
      <button style="background-color: rgb(255, 180, 249); color: #fff;" @click="goToFavorites">Go to Favorites</button>
    </div>
  </div>
</template>

<script>
import DocumentTable from '../components/DocumentTable.vue';
import { apiService } from '../api/apiService';

export default {
  name: 'DocumentsView',
  components: { DocumentTable },
  data() {
    return {
      documents: [], // Liste complète des documents
      searchQuery: '', // Query de recherche
      filteredDocuments: [], // Liste filtrée des documents
    };
  },
  async created() {
    try {
      this.documents = await apiService.getRecettes();
      this.filteredDocuments = this.documents; // Initialement, tous les documents sont affichés
    } catch (error) {
      console.error('Erreur lors de la récupération des documents :', error);
    }
  },
  methods: {
    goToFavorites() {
      this.$router.push('/favorites');
    },
    searchDocuments() {
      const query = this.searchQuery.toLowerCase();
      this.filteredDocuments = this.documents.filter(doc => doc.name.toLowerCase().includes(query));
    },
  },
};
</script>