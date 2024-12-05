<template>
  <div>
    <table>
      <tbody>
        <tr v-for="doc in documents" :key="doc.id">
          <td>{{ doc.recette }}</td>
          <td style="padding: 0.5rem;display: flex;gap: 0.5rem;">
            <button style="background-color: rgb(255, 218, 252); color: #fff;" @click="viewDocument(doc.recette)">View</button>
            <button style="background-color: rgb(255, 180, 249); color: #fff;" @click="addToFavorites(doc.recette)">Add to Favorites</button>
            <button style="background-color: rgb(255, 73, 240); color: #fff;" @click="downloadDocument(doc.id)">Download</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { apiService } from '../api/apiService'; // Ensure correct path

export default {
  props: {
    documents: {
      type: Array,
      required: true,
    },
  },
  methods: {
    viewDocument(id) {
      this.$router.push(`/document/${id}`);
    },
    async downloadDocument(id) {
      try {
        const url = `http://localhost:3000/recette/${id}`;
        const link = document.createElement('a');
        link.href = url;
        link.download = id;
        link.click();
        alert(`Document "${id}" downloaded.`);
      } catch (err) {
        alert('Error downloading document.');
        console.error(err);
      }
    },
    async addToFavorites(name) {
      try {
        const filename = name.toLowerCase() + '.html';
        console.log(filename);
        const response = await apiService.addFavorite(filename);
        alert(`Document "${name}" added to favorites!`);
        console.log(response);
      } catch (err) {
        alert('Error adding document to favorites.');
        console.error(err);
      }
    },
  },
};
</script>
