import React, { useState, useEffect } from "react";
import { getAllMoviesByGenreConfig } from "../data/getDataByGenre";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import documentariesData from "../data/documentaries.json";
import specialsData from "../data/specials.json";
import featureData from "../data/feature-films.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const Genre = () => {
  const allMoviesByGenreConfig = getAllMoviesByGenreConfig(
    documentariesData,
    specialsData,
    featureData
  );

  return (
    <section>
      <h2>Movies by genres!</h2>
      <Pie data={allMoviesByGenreConfig} />
    </section>
  );
};

export default Genre;
