import { NavLink } from "react-router-dom";


import styles from '../styles/AppNav.module.css'


const AppNav : React.FC = () => {

  return (
    <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to = 'cities' >cities</NavLink>
          </li>
          <li>
            <NavLink to = 'countries' >countries</NavLink>
          </li>
        </ul>
    </nav>
  )


}



export default AppNav;