import React, { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
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

import "./styles/language.css";
import { groupMoviesByPremiere } from "../data/getDataByMonth";

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

export const commonFontOptions = {
  size: 14,
};

export const chartOptions = {
  scales: {
    x: {
      ticks: {
        font: commonFontOptions,
      },
    },
    y: {
      beginAtZero: true,
      min: 0,
      ticks: {
        font: commonFontOptions,
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        font: commonFontOptions,
      },
    },
  },
  animation: {
    duration: 1300, // Fördröjer animeringen i 2 sekunder
    easing: "easeInOutExpo", // Använder en kurva med inbyggd fördröjning
  },
};

const Month = () => {
  const allMoviesConfig = groupMoviesByPremiere();

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
        <h2>Movies by release month</h2>
        <p>
          Here, you'll find data on the release month of films available in each
          category
        </p>
      </motion.div>
      <div className="release feature">
        <Bar
          data={allMoviesConfig}
          options={chartOptions}
          className="release-chart"
        />
      </div>
    </section>
  );
};

export default Month;
