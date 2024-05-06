  import React from 'react';
  import './MovieList.css';
  
  const MovieList = ({ movies, onToggleFavorite }) => {
    return (
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            {onToggleFavorite && (
              <button
                className={`favorite-button ${movie.favorite ? 'favorite' : ''}`}
                onClick={() => onToggleFavorite(movie.id)}
              >
                <span role="img" aria-label="Favorite">⭐</span>
              </button>
            )}
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    );
  }; 
  
  export default MovieList;
  
  