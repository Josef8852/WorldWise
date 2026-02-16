import { NavLink, Outlet } from 'react-router-dom';


import styles from '../styles/AppLayout.module.css'
import AppNav from './AppNav';




const Sidebar : React.FC = () => {

return (
  <div className={styles.sidebar}>
        <NavLink to="/"> <img src="../../public/logo.png" alt="" /></NavLink>

        <AppNav/>

        <Outlet/>  {/* NESTED ROUTES ELEMENT */}

  </div>
);

}


export default Sidebar ;