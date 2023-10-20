import React from "react";
import { RiMovieLine } from "react-icons/ri";
import "./styles/home.css";

const Home = () => {
  return (
    <section className="home-sect">
      <div className="hero-text">
        <RiMovieLine className="home-icon" />
        <h1 className="home-h1">Movieflex</h1>
      </div>
    </section>
  );
};

export default Home;
