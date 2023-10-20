import React, { useState, useEffect } from "react";
import documentariesData from "../data/documentaries.json";
import specialsData from "../data/specials.json";
import featureData from "../data/feature-films.json";
import "./styles/search.css";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
  hover: {
    color: "#7259ff",
    duration: 0.1,
  },
  tap: {
    scale: 0.9,
  },
};

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
        className="search-input"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="search-result">
        {searchTerm !== "" &&
          filteredMovies.map((movie, index) => (
            <motion.li
              className="search-li"
              variants={animations}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ ...animations.transition, delay: index * 0.02 }}
              whileHover="hover"
              whileTap="tap"
              key={movie.Title}
            >
              {movie.Title}
            </motion.li>
          ))}
      </ul>
      {filteredMovies.length === 1 &&
        filteredMovies.map((movie) => (
          <ul className="search-result" key={movie.Title}>
            <li>{movie.Genre || "Dokumentary"}</li>
            <li> Released: {movie.Premiere}</li>
            <li> Duration: {movie.Runtime}</li>
            <li> Language: {movie.Language}</li>
          </ul>
        ))}
    </section>
  );
};

export default Search;
