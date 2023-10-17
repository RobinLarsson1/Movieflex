import React, { useState, useEffect } from "react";
import { getAllMoviesByDurationConfig } from "../data/getDataByDuration";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import documentariesData from "../data/documentaries.json";
import specialsData from "../data/specials.json";
import featureData from "../data/feature-films.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Duration = () => {
  const allMoviesByDurationConfig = getAllMoviesByDurationConfig(
    documentariesData,
    specialsData,
    featureData
  );
  console.log(allMoviesByDurationConfig);
  return (
    <section>
      <h2>Movies by duration!</h2>
      <Line data={allMoviesByDurationConfig} />;
    </section>
  );
};

export default Duration;
