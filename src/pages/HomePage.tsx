import { NavLink } from "react-router-dom";

import PageNav from "../components/PageNav";
import styles from "../styles/HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.homepage}>
      <PageNav />
      <div>
        <h1>
          You travel the world <br /> WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <NavLink to="/login">
          <button className="btn">START TRACKING NOW</button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
