import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './SearchBar.css';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

<<<<<<< HEAD
  const search = () => {
    if (!term.trim()) {
      toast.error('Enter A Song Title');
      return;
    }
    props.onSearch(term);
    setTerm('');
=======
  const handleSearch = () => {
    if (!term.trim()) {
      toast.error('Enter a song title');
      return;
    }
    props.onSearch(term);
    setTerm(''); 
>>>>>>> 8edcd59e7f5a0d25c11ccf1429c38614047b4477
  };

  return (
    <div className="SearchBar">
      <input
<<<<<<< HEAD
        placeholder="Enter A Song Title"
        value={term} 
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={search}>
=======
        placeholder="Enter a song title"
        value={term}
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={handleSearch}>
>>>>>>> 8edcd59e7f5a0d25c11ccf1429c38614047b4477
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
