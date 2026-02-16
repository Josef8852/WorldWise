import { createContext , useEffect  , useState} from "react";
import { CityObj , CitiesProviderProps , CitiesContextChildren, NewCity } from "../types/types";


const BASE_URL: string = ""; /* JSON SERVER */

const CitiesContext = createContext<CitiesContextChildren | undefined>(undefined);


const CitiesProvider = ({children} : CitiesProviderProps) => {

  const [cities, setCities] = useState<Array<CityObj>>([]);
  const [currentCity, setCurrentCity] = useState<CityObj | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    const getCities = async (): Promise<void> => {
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Error");
      }
    };

    getCities();
  }, []);


  const getCity =  async (id: string) :Promise<void> => {
    try {
      setIsloading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
        
      if (err instanceof Error) {
        alert(err.message);
      }
      else {
        alert("Unknown Error");
      }
      
    } 
    finally {
      setIsloading(false);
    }
    };
  
  const createCity =  async (newCity : NewCity) : Promise<void> => {
    try {
      setIsloading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST", body: JSON.stringify(newCity), headers: { "Content-Type": "application/json" }
      });
    
      const data = await res.json();
      setCities((cities) => [...cities , data]);
    }
    catch  {
      alert("An error occured while adding a City");
    }
    finally {
      setIsloading(false);
    }
    
  
  }
  
  
  const deleteCity =  async (id : string) : Promise<void> => {
    try {
      setIsloading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE"  
      });
    
      setCities((cities) => cities.filter((city) => city.id !== (id)));
    }
    catch  {
      alert("An error occured while deleting a City");
    }
    finally {
      setIsloading(false);
    }
    
  
  }



  return <CitiesContext.Provider value={
    { cities , currentCity , deleteCity ,getCity ,createCity ,isLoading }
  }>
      {children}
  </CitiesContext.Provider>

}

 



export { CitiesProvider , CitiesContext};
