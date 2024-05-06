import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../services/characterServices";
import MovieList from "../components/MovieList/MovieList"


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


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

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <MovieList movies={filteredMovies } />
    </div>
  );
};

export default Home;  





