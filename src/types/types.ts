import { ReactNode } from "react"

interface PositionCords {
  lat : number 
  lng : number
}



export interface CityObj  {
  cityName : string 
  country : string 
  emoji : string 
  date : string 
  id: string 
  position: PositionCords
  notes : string
}

export type NewCity = Omit<CityObj, "id">


export interface CountryItemType {
  emoji : string
  countryName : string 
}


export interface CityItemProps {
  city : CityObj
}


export interface CountryItemProps {
  country : CountryItemType
}

type handleFormEvent = (e : React.MouseEvent<HTMLButtonElement>) => void 

export interface ButtonProps {
  children : string 
  type : string 
  onClick? : handleFormEvent
}

export interface CitiesProviderProps {
  children: ReactNode;
}


export interface CitiesContextChildren {
  
  cities: Array<CityObj>;
  currentCity: CityObj | null; 
  getCity: (id: string) => Promise<void>; 
  isLoading: boolean;
  createCity: (newCity: NewCity) => Promise<void>;
  deleteCity: (id: string) => Promise<void>;
  
}

export interface CenterMapProps {
  position: [number, number];
}



export type useUrlPositionType = [latParam: string | null , lngParam: string | null];