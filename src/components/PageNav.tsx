import { NavLink } from "react-router-dom";



import styles from '../styles/PageNav.module.css'


const PageNav: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
    <NavLink to="/">
  <img src="/logo.png" alt="Logo" />
    </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/login">
            <button className="btn">Login</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageNav;
