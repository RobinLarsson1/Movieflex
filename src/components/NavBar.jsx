import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { TbCategory2 } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";
import "./styles/navbar.css";
import { Link } from "react-router-dom";

const liVariants = {
  hover: {
    color: "#7259ff",
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <RiMovie2Line className="logo-icon" />
        <Link to="/">
          <h2 className="nav-h2">Movieflex</h2>
        </Link>
        <HiMenuAlt2 className="menu-icon" />
      </div>
      <ul className="link-ul">
        <Link to="/genres">
          <motion.li
            className="genre li"
            variants={liVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <TbCategory2 className="li-icon" />
            Genres
          </motion.li>
        </Link>
        <Link to="/languages">
          <motion.li
            className="language li"
            variants={liVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <BsGlobeEuropeAfrica className="li-icon" />
            Languages
          </motion.li>
        </Link>
        <Link to="/durations">
          <motion.li
            className="duration li"
            variants={liVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <BiTimeFive className="li-icon" />
            Duration
          </motion.li>
        </Link>
        <Link to="/release">
          <motion.li
            className="released li"
            variants={liVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <BsCalendar2Date className="li-icon" />
            Release dates
          </motion.li>
        </Link>
      </ul>
      <div className="me">
        <Link
          to="https://www.linkedin.com/in/robinlarsson01/"
          target="_blank"
          className="me-link"
        >
          <p>Made by: Robin Larsson</p>
          <CiLinkedin className="linked-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
