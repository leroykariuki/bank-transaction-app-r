// src/components/SearchBar.js

import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <div>
      <input type="text" placeholder="Search transactions..." onChange={handleSearchChange} />
    </div>
  );
};

export default SearchBar;
