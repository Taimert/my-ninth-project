// Fetch movies from backend
async function loadMovies() {
  try {
    const response = await fetch('http://localhost:5000/api/movies');
    const movies = await response.json();
    console.log('Loaded movies:', movies);
  } catch (error) {
    console.error('Error loading movies:', error);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', loadMovies);