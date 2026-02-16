import { Link} from "react-router-dom";
import styles from '../styles/CityItem.module.css'
import { CityItemProps } from "../types/types";
import { formatDate } from "../helpers/helper";
import  useCities from "../context/UseCities";
import { MouseEvent } from "react";





const CityItem: React.FC<CityItemProps> = ({ city }) => {
  
  const { currentCity ,deleteCity } = useCities();
  
  

  const {emoji , position , date , cityName , id} = city;

  
  const handleClick = (e:MouseEvent<HTMLButtonElement>) : void => {
    e.preventDefault();
    
    deleteCity(id);
  }
  
  return (
    <li>
      {/* Query String */}
      <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} className={`${styles.cityItem} ${id === currentCity?.id ? styles['cityItem--active'] : ''} `}>
        <span className= {styles.emoji}>{emoji}</span>
        <h3 className= {styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>&times;</button>
        </Link>
    </li>
  )


}


export default CityItem  ;