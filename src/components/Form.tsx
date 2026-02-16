import  { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from '../styles/Form.module.css'
import Button from './Button ';
import useUrlPosition from '../hooks/useUrlPosition';
import { convertToEmoji } from '../helpers/helper';
import Spinner from './Spinner';
import useCities from '../context/UseCities';
import { NewCity } from '../types/types';

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";



const Form : React.FC = () => {

  const navigate = useNavigate() ; 
  
  const [lat, lng] = useUrlPosition();
  

  const [cityName, setCityName] = useState<string>("");
  const [country, setCountry] = useState<string>(""); 
  const [date, setDate] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState<string>("");
  
  const [isDataLoading, setisDataLoading] = useState<boolean>(false); 
  
  const { createCity ,isLoading} = useCities();

  
  const [emoji, setEmoji] = useState<string>("");
  
  
  useEffect(() => {
    
    const fetchCityData = async () => {
      try {
        setisDataLoading(true);
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        
        const data = await res.json();
       
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
        setNotes("");
      }
      catch {
        alert("Error");
      }
      finally {
        setisDataLoading(false);
      }
    }
    fetchCityData();
  } ,[lat , lng]);
  
  
  const handleSubmit = async (e : FormEvent) : Promise<void> => {
    
    e.preventDefault();
    
    if (!cityName || !date) return; 
    
    
    const newCity : NewCity = {
      cityName, 
      country,
      emoji,
      date : date.toISOString(),
      notes,
      position: {
        lat: Number(lat), 
        lng : Number(lng)
      }
    }
    
    await createCity(newCity);
    
    navigate("/app/cities");
  }
  
  
  
    if(isDataLoading) return <Spinner></Spinner>
  
  return (
    <form className={`${styles.form} ${isLoading ? styles.loading : ''}`} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span> 
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
     
        <DatePicker className={styles.datePicker} onChange={(date: Date | null) => setDate(date)}
        selected={date} dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type='primary'>Add</Button>
        <Button type='back' onClick = {(e : React.FormEvent) => {e.preventDefault() ; navigate(-1)}}>&larr; Back</Button>
      </div>
    </form>
  );

}

export default Form ; 