import Sidebar from "../components/Sidebar";
import styles from "../styles/AppLayout.module.css";
import Map from "../components/Map";

const AppLayout: React.FC = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
