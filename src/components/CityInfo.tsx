import styles from '../styles/CityInfo.module.css'
import { formatDate } from '../helpers/helper';
import { useParams } from 'react-router-dom';
import useCities from '../context/UseCities';
import { useEffect } from 'react';
import Spinner from './Spinner';
import Button from './Button ';
import { useNavigate } from 'react-router-dom';

const CityInfo : React.FC = () => {
  
  const navigate = useNavigate();
  
  const { id } = useParams<{id  : string}>();
  
  const { getCity, currentCity  , isLoading} = useCities();

  
  useEffect(() => {
      
    if (!id) return;
    
    getCity(id);
    
  } ,[id]);
  
  
  
  if(!currentCity || isLoading) return <Spinner></Spinner>
  
  

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={`${styles.city}`}>
      <div className={styles.row}>
        <div className={styles.firstRow}>
          <div>
            <h6>City name</h6>
            <h3>
              <span>{emoji}</span> {cityName}
            </h3>
        </div>
           <Button type='back' onClick = {(e : React.FormEvent) => {e.preventDefault() ; navigate(-1)}}>&larr; Back</Button>
        </div>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

    
    </div>
  );
}


export default CityInfo