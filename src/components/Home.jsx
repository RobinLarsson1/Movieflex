import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import "./styles/home.css";

const Home = () => {
  return (
    <section className="home-sect">
      <div className="heading">
      <div className="hero-text">
        <RiMovie2Line className="home-icon" />
        <h1 className="home-h1">Movieflex</h1>
        </div>
        <p className="home-p">Movies stats dashboard</p>
      </div>
    </section>
  );
};

export default Home;
