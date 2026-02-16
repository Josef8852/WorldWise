import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "../styles/AppLayout.module.css";
import { useEffect, useState } from "react";
import useCities from "../context/UseCities";
import { ChangeMapCenter , DetectMapClick } from "./MapHelpers";
import  useUrlPosition  from "../hooks/useUrlPosition";



const Map: React.FC = () => {


  
  const [mapPosition, setMapPosition] = useState<[number, number]>([40, 0]);
  
  const { cities } = useCities();
  
  const [latParam, lngParam ] = useUrlPosition();
 
  
  const mapLat = latParam ? parseFloat(latParam) : mapPosition[0];
  
  const mapLng = lngParam ? parseFloat(lngParam) : mapPosition[1];

  
  useEffect(() => {
    if(mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    
  },[mapLat, mapLng]);
 

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city) => (
          <Marker key = {city.id} position={[city.position.lat , city.position.lng]}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeMapCenter position={[mapLat, mapLng]} />
        <DetectMapClick />
      </MapContainer>
    </div>
  );
};




export default Map;
