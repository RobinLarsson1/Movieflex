import React, { useState, useEffect } from "react";
import { getAllMoviesByLanguageConfig } from "../data/getDataByLanguage";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import documentariesData from "../data/documentaries.json";
import specialsData from "../data/specials.json";
import featureData from "../data/feature-films.json";
import "./styles/language.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Language = () => {
  const allMoviesByLanguageConfig = getAllMoviesByLanguageConfig(
    documentariesData,
    specialsData,
    featureData
  );

  return (
    <section>
      <h2>Movies by language!</h2>
      <Pie data={allMoviesByLanguageConfig} />
    </section>
  );
};

export default Language;
