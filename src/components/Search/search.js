import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <i className="fa fa-search" />
      </button>
    </form>
  );
};

export default Search;
