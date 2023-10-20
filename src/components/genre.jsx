import React, { useState, useEffect } from "react";
import { getAllMoviesByGenreConfig } from "../data/getDataByGenre";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import documentariesData from "../data/documentaries.json";
import specialsData from "../data/specials.json";
import featureData from "../data/feature-films.json";
import "./styles/genre.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Genre = () => {
  const allMoviesByGenreConfig = getAllMoviesByGenreConfig(
    documentariesData,
    specialsData,
    featureData
  );

  return (
    <section className="genre-sect">
      <h2 className="genre-h2">Movies by genres!</h2>
      <Bar data={allMoviesByGenreConfig} />
    </section>
  );
};

export default Genre;
