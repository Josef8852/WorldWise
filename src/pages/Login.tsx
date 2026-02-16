import { NavLink } from "react-router-dom";

import PageNav from "../components/PageNav";
import styles from "../styles/Login.module.css";

const Login: React.FC = () => {
  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <div>
          <NavLink to="/app/cities">
            <button className="btn">Login</button>
          </NavLink>
        </div>
      </form>
    </main>
  );
};

export default Login;
