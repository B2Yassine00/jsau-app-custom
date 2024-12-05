<template>
  <div>
    <h2>Favorites</h2>
    <div v-if="favorites.length === 0" class="no-favorites">
      No favorites available.
    </div>
    <table v-else>
      <thead>
        <tr>
          <th>Filename</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fav in favorites" :key="fav.id">
          <td>{{ fav.recetteFile }}</td>
          <td style="padding: 0.5rem;display: flex;gap: 0.5rem;">
            <button style="background-color: rgb(160, 13, 13); color: white;" @click="deleteFavorite(fav.recetteFile)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { apiService } from '../api/apiService';

export default {
  data() {
    return {
      favorites: [],
    };
  },
  async mounted() {
    try {
      this.favorites = await apiService.getFavorites();
    } catch (error) {
      console.error(error.message);
      this.favorites = []; // Set to an empty array if no favorites
    }
  },
  methods: {
    async deleteFavorite(filename) {
      try {
        await apiService.deleteFavorite(filename);
        this.favorites = this.favorites.filter(fav => fav.filename !== filename); // Update local state
        window.location.reload();
      } catch (error) {
        alert(error.message);
        console.error(error);
      }
    },
  },
};
</script>
