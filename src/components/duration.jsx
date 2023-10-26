import React, { useState, useEffect } from "react";
import "./styles/duration.css";
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
import { motion } from "framer-motion";
import documentariesData from "../data/documentaries.json";
import specialsData from "../data/specials.json";
import featureData from "../data/feature-films.json";
import { chartOptions } from "./releaseMonth";

const animations = {
  initial: { opacity: 0, x: 500 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -500 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

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
    <section className="duration-sect">
      <motion.div
        className="duration-head"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
      >
        <h2>Movies by duration</h2>
        <p>Here, you'll find data by the duration of each movie</p>
      </motion.div>
      <div className="duration-div">
        <Line
          data={allMoviesByDurationConfig}
          options={chartOptions}
          className="duration-chart"
        />
      </div>
    </section>
  );
};

export default Duration;
