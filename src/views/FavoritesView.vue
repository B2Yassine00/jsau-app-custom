<template>
  <div>
    <FavoritesTable :favorites="favorites" @refreshFavorites="loadFavorites" />
    <div style="display: flex; justify-content: center; align-items: center; padding: 1rem;">
      <button @click="goBack">Back to Documents</button>
    </div>
  </div>
</template>

<script>
import FavoritesTable from '../components/FavoritesTable.vue';
import { apiService } from '../api/apiService';

export default {
  components: { FavoritesTable },
  data() {
    return { favorites: [] };
  },
  async created() {
    this.loadFavorites();
  },
  methods: {
    async loadFavorites() {
      this.favorites = await apiService.getFavorites('testuser');
    },
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>
