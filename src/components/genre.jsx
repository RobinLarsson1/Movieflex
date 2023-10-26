import React, { useState, useEffect } from "react";
import { getAllMoviesByGenreConfig } from "../data/getDataByGenre";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import documentariesData from "../data/documentaries.json";
import specialsData from "../data/specials.json";
import featureData from "../data/feature-films.json";
import "./styles/genre.css";
import { motion } from "framer-motion";
import "./styles/release.css";
import { chartOptions } from "./releaseMonth";

ChartJS.register(ArcElement, Tooltip, Legend);

const animations = {
  initial: { opacity: 0, x: 500 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -500 },
  transition: { duration: 0.5, ease: "easeInOut" },
};
const Genre = () => {
  const allMoviesByGenreConfig = getAllMoviesByGenreConfig(
    documentariesData,
    specialsData,
    featureData
  );

  return (
    <section className="genre-sect">
      <motion.div
        className="genre-head"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
      >
        <h2>Movies by release date</h2>
        <p>
          Here, you'll find data on the release date of films available in each
          category
        </p>
      </motion.div>
      <div className="genre-div">
        <Bar
          data={allMoviesByGenreConfig}
          options={chartOptions}
          className="genre-chart"
        />
      </div>
    </section>
  );
};

export default Genre;
