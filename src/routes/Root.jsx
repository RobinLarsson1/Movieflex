import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import "../app.css";
import AnimatedBack from "../components/animatedBack";

const Root = () => {
  return (
    <div>
      <Navbar />
      <AnimatedBack />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
