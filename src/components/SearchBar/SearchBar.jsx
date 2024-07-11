import React, { useState } from "react";
import { toast } from "react-toastify";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const search =() => {
    if (!term.trim()){
      toast.error('Enter A Song Title')

      return
    }
    props.onSearch(term);
  };

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song Title" onChange={handleTermChange} />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
