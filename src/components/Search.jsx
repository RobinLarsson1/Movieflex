import React, { useState, useEffect } from "react";
import documentariesData from "../data/documentaries.json";
import specialsData from "../data/specials.json";
import featureData from "../data/feature-films.json";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allData = [...documentariesData, ...specialsData, ...featureData];

  const filteredMovies = allData.filter((movie) =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchTerm !== "" &&
          filteredMovies.map((movie) => (
            <li key={movie.Title}>{movie.Title}</li>
          ))}
      </ul>
      {filteredMovies.length === 1 &&
        filteredMovies.map((movie) => (
          <ul key={movie.Title}>
            <li>{movie.Genre || "Dokumentär"}</li>
            <li> Released: {movie.Premiere}</li>
            <li> Duration: {movie.Runtime}</li>
            <li> Language: {movie.Language}</li>
          </ul>
        ))}
    </section>
  );
};

export default Search;
