import axios from "axios";

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '65051c82c3ad7fbab05612a5f9eb82b7';

export const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
          sort_by: 'popularity.desc',
          include_adult: false,
          include_video: false,
          page: 1
        }
      });
      return response.data.results.map(movie => ({ ...movie, favorite: false }));
    } catch (error) {
      throw new Error('Error al obtener los datos');
    }
  };

  export const searchMovies = async (query) => {
    try {
      const response = await axios.get(`${API_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: query
        }
      });
      return response.data.results.map(movie => ({ ...movie, favorite: false }));
    } catch (error) {
      throw new Error('Error al obtener los resultados de la búsqueda');
    }
  };

  export const fetchMoviesByClassification = async (classification) => {
    try {
      const response = await axios.get(`${API_URL}/movie/${classification}`, {
        params: {
          api_key: API_KEY
        }
      });
      return response.data.results.map(movie => ({ ...movie, favorite: false }));
    } catch (error) {
      throw new Error('Error al obtener las películas por clasificación');
    }
  };