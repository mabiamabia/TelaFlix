export const API_CONFIG = {
  API_KEY: "b5d2a951efdcc9e9e04a3c50c906d191",
  BASE_URL: "https://api.themoviedb.org/3",
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500",
  TMDB_MOVIE_URL: "https://www.themoviedb.org/movie"
};

export const fetchMovies = async (endpoint, page = 1) => {
  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${endpoint}?api_key=${API_CONFIG.API_KEY}&language=pt-BR&page=${page}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    throw error;
  }
};
