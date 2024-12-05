const API_BASE_URL = 'http://localhost:4000';

export const apiService = {

  addNumbers(a, b) {
    return a + b; // Simple addition function
  },

  multiplyNumbers(a, b) {
    return a * b; // Simple multiply function
  },

  async getRecettes(recette = '') {
    const url = recette ? `${API_BASE_URL}/search?recette=${recette}` : `${API_BASE_URL}/search`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch documents');
    return response.json();
  },

  async getRecetteContent(name) {
    const filename = name.toLowerCase();
    const response = await fetch(`${API_BASE_URL}/search?recette=${encodeURIComponent(filename)}`);
    if (!response.ok) throw new Error('Failed to fetch document content');
    return response.text();
  },

  async addFavorite(recetteFile) {
    const response = await fetch(`${API_BASE_URL}/favorites`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recetteFile }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to add favorite');
    }
    return response.json();
  },

  async getFavorites() {
    const response = await fetch(`${API_BASE_URL}/favorites`);
    if (!response.ok) throw new Error('Failed to fetch favorites');
    return response.json();
  },

  async deleteFavorite(filename) {
    const response = await fetch(`${API_BASE_URL}/favorites`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename }),
    });
    if (!response.ok) throw new Error('Failed to delete favorite');
    return response.json();
  },
};
