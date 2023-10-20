import React, { useState, useEffect } from "react";
import "./styles/release.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import documentariesData from "../data/documentaries.json";
import specialsData from "../data/specials.json";
import featureData from "../data/feature-films.json";
import "./styles/language.css";
import {
  getFeatureByMonthConfig,
  getDocumentariesByMonthConfig,
  getSpecialsByMonthConfig,
} from "../data/getDataByMonth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Month = () => {
  const featureMoviesByMonthConfig = getFeatureByMonthConfig(featureData);
  const documentaryMoviesByMonthConfig =
    getDocumentariesByMonthConfig(documentariesData);
  const specialsMoviesByMonthConfig = getSpecialsByMonthConfig(specialsData);

  return (
    <section className="release-sect">
      <div className="release feature">
        <h2 className="release-h2">Feature movies by release month!</h2>
        <Bar data={featureMoviesByMonthConfig} />
      </div>
      <div className="release documentary">
        <h2 className="release-h2">Documentary movies by release month!</h2>
        <Bar data={documentaryMoviesByMonthConfig} />
      </div>
      <div className="release specials">
        <h2 className="release-h2">Specials movies by release month!</h2>
        <Bar data={specialsMoviesByMonthConfig} />
      </div>
    </section>
  );
};

export default Month;
