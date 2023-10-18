import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import "../app.css";
import ReleaseMonth from "../components/releaseMonth.jsx";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
