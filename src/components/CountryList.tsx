import styles from '../styles/CountryList.module.css'
import CountryItem from './CountryItem';
import { CountryItemType } from '../types/types';
import Message from '../components/Message'
import useCities from '../context/UseCities';


const CountryList : React.FC= () => {

  const { cities } = useCities();

  const uniqueCountries = new Set<string>() ; 

  const countries : Array<CountryItemType> = [] ;

  cities.forEach((city) => {
        uniqueCountries.add(JSON.stringify({emoji : city.emoji , countryName : city.country}));
      }
  );  /* store objects as unique strings to avoid duplicates when using objects  */

  for(const country of uniqueCountries) {
      countries.push(JSON.parse(country)) /* parse the string and add it to the array  */
  }


  if(!cities.length) return <Message message={'Add your first city by clicking on a city on the map'}/>

return (
<ul className= {styles.countryList}>
  {
    countries.map((country , idx) => {
      return <CountryItem country = {country} key={idx}/>
    })
  }
</ul>
)


}


export default CountryList ;