import React from 'react';
import './MovieFilter.css';

const MovieFilter = ({ onFilterByClassification, onShowFavoriteMovies, showFavorites, hasFavoriteMovies }) => {
  const handleShowFavoriteMovies = () => {
    if (!hasFavoriteMovies) {
      alert('No has seleccionado ninguna película como favorita');
    } else {
      onShowFavoriteMovies();
    }
  };

  return (
    <div className="menu">
      <button onClick={() => onFilterByClassification('top_rated')}>Top Rated</button>
      <button onClick={() => onFilterByClassification('now_playing')}>Now Playing</button>
      <button onClick={() => onFilterByClassification('upcoming')}>Upcoming</button>
      <button onClick={() => onFilterByClassification('popular')}>Popular</button>
      {!showFavorites && (
        <button className="favorites-button" onClick={handleShowFavoriteMovies}>
          Favoritos
        </button>
      )}
    </div>
  );
};

export default MovieFilter;