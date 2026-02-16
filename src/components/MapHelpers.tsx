import React from "react";
import { useMap, useMapEvents } from "react-leaflet";
import { CenterMapProps } from "../types/types";
import { useNavigate } from "react-router-dom";



const ChangeMapCenter  : React.FC<CenterMapProps> =  ({position}) => {
  const map = useMap();
  map.setView(position);
  return null;  
}

const DetectMapClick: React.FC = () => {
    const navigate = useNavigate(); /* Programmatic navigation */
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  });
  
  return null;
}


export {ChangeMapCenter , DetectMapClick}