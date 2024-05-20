import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../card/card";
import "./searchResults.css";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => setSearchResults(data.results));
  }, [query]);

  return (
    <div className="search__results">
      <h2 className="results__title">Search Results for "{query}"</h2>
      <div className="results__cards">
        {searchResults.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
