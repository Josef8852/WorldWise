import styles from '../styles/CountryItem.module.css'
import { CountryItemProps } from "../types/types";


const CountryItem : React.FC<CountryItemProps> = ({country}) => {

  const {emoji , countryName} = country

  return (
    <li className={styles.countryItem}>
        <span>{emoji}</span>
        <span>{countryName}</span>
    </li>
  )


}


export default CountryItem ; 
