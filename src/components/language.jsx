import React from "react";
import { getMoviesByLanguageConfig } from "../data/getDataByLanguage";
import { Pie } from "react-chartjs-2";
import documentariesData from "../data/documentaries.json";
import specialsData from "../data/specials.json";
import featureData from "../data/feature-films.json";
import { motion } from "framer-motion";
import { commonFontOptions } from "./releaseMonth";

const animations = {
  initial: { opacity: 0, x: 500 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -500 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const chartOptionsLanguage = {
  plugins: {
    legend: {
      labels: {
        font: commonFontOptions,
      },
    },
  },
  animation: {
    duration: 1500, // Fördröjer animeringen i 2 sekunder
    easing: "easeInOutExpo", // Använder en kurva med inbyggd fördröjning
  },
};

const LanguageCharts = () => {
  const allMoviesData = [...documentariesData, ...specialsData, ...featureData];
  const documentariesConfig = getMoviesByLanguageConfig(documentariesData);
  const specialsConfig = getMoviesByLanguageConfig(specialsData);
  const featureConfig = getMoviesByLanguageConfig(featureData);
  const allMoviesConfig = getMoviesByLanguageConfig(allMoviesData);

  return (
    <section className="language-sect">
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
        className="language-text"
      >
        <h2 className="language-h2">Movies by Language</h2>
        <p className="language-p">
          Here, you'll find data on the number of movies available for each
          language
        </p>
      </motion.div>
      <div className="language-chart">
        <motion.div className="language-pie">
          <h3 className="language-h3">All Movies</h3>
          <Pie
            data={allMoviesConfig}
            options={chartOptionsLanguage}
            className="lang-chart"
          />
        </motion.div>
        <div className="language-pie">
          <h3 className="language-h3">Documentaries</h3>
          <Pie
            data={documentariesConfig}
            options={chartOptionsLanguage}
            className="lang-chart"
          />
        </div>
        <div className="language-pie">
          <h3 className="language-h3">Specials</h3>
          <Pie
            data={specialsConfig}
            options={chartOptionsLanguage}
            className="lang-chart"
          />
        </div>
        <div className="language-pie">
          <h3 className="language-h3">Feature Films</h3>
          <Pie
            data={featureConfig}
            className="lang-chart"
            options={chartOptionsLanguage}
          />
        </div>
      </div>
    </section>
  );
};

export default LanguageCharts;
