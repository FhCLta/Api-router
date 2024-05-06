import React, { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies, fetchMoviesByClassification } from "../services/characterServices";
import MovieSearchForm from "../components/MovieSearchForm/MovieSearchForm";
import MovieList from "../components/MovieList/MovieList"
import MovieFilter from "../components/MovieFilter/MovieFilter";


const Menu = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoriteColor, setFavoriteColor] = useState({}); // Definir favoriteColor

  const fetchData = async () => {
    try {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
      setFilteredMovies(popularMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
     fetchData();
  }, []);


  
  const handleToggleFavorite = (id) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
    );
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const handleSearchMovies = async (query) => {
    try {
      const searchResults = await searchMovies(query);
      setMovies(searchResults);
      setFilteredMovies(searchResults);
      setShowFavorites(false);
      setFavoriteColor({}); // Limpiar favoriteColor
    } catch (error) {
      setError(error);
    }
  };

  const handleFilterByClassification = async (classification) => {
    try {
      const classificationMovies = await fetchMoviesByClassification(classification);
      setMovies(classificationMovies);
      setFilteredMovies(classificationMovies);
      setShowFavorites(false);
      setFavoriteColor({}); // Limpiar favoriteColor
    } catch (error) {
      setError(error);
    }
  };

  const handleShowFavoriteMovies = () => {
    const favoriteMovies = movies.filter(movie => movie.favorite);
    if (!favoriteMovies.length) {
      showNotification();
    } else {
      setFilteredMovies(favoriteMovies);
      setShowFavorites(true);
    }
  };

  const handleShowAllMovies = () => {
    setFilteredMovies(movies);
    setShowFavorites(false);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <MovieSearchForm onSubmit={handleSearchMovies} />
      <MovieFilter 
        onFilterByClassification={handleFilterByClassification} 
        onShowFavoriteMovies={handleShowFavoriteMovies} 
        showFavorites={showFavorites} 
        hasFavoriteMovies={movies.some(movie => movie.favorite)}
      />
       
      <MovieList movies={filteredMovies} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
};

export default Menu;
