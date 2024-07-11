import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './SearchBar.css';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSearch = () => {
    if (!term.trim()) {
      toast.error('Enter a song title');
      return;
    }
    props.onSearch(term);
    setTerm(''); 
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter a song title"
        value={term}
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
