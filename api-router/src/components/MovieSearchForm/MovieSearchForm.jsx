import React from 'react';
import './MovieSearchForm.css';

const MovieSearchForm = ({ onSubmit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.searchInput.value.trim();
    if (searchTerm !== "") {
      onSubmit(searchTerm);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="search-bar">
      <input type="text" id="searchInput" name="searchInput" placeholder="Buscar películas..." />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default MovieSearchForm;