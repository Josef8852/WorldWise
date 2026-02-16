import styles from '../styles/CityList.module.css'
import CityItem from "./CityItem";
import Message from "./Message";
import useCities from '../context/UseCities';

const CityList: React.FC = () => {

  
  const { cities } = useCities(); 

  if(!cities.length) return <Message message={'Add your first city by clicking on a city on the map'}/>


  return (
  
      <ul className= {styles.cityList} >
        {
            cities.map((city) : JSX.Element => {
              return <CityItem city = {city} key={city.id}/>
            })
        }
        
      </ul>
 
  )

}


export default CityList ; 