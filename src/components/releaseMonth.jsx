import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  getMoviesByMonthConfig,
} from "../data/getDataByMonth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const animations = {
  initial: { opacity: 0, x: 500 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -500 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const Month = () => {
  const featureMoviesByMonthConfig = getFeatureByMonthConfig(featureData);
  const documentaryMoviesByMonthConfig =
    getDocumentariesByMonthConfig(documentariesData);
  const specialsMoviesByMonthConfig = getSpecialsByMonthConfig(specialsData);
  const allMoviesByMonthConfig = getMoviesByMonthConfig(
    featureData,
    documentariesData,
    specialsData
  );

  return (
    <section className="release-sect">
      <motion.div
        className="head"
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
      <div className="release specials">
        <h2 className="release-h2">All movies by release month!</h2>
        <Bar data={allMoviesByMonthConfig} />
      </div>
    </section>
  );
};

export default Month;
