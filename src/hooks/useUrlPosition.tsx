import { useUrlPositionType } from "../types/types";

import { useSearchParams } from "react-router-dom";

 const useUrlPosition  = ()  : useUrlPositionType => {
  
  const [searchParams] = useSearchParams();

 const latParam = searchParams.get("lat");

 const lngParam = searchParams.get("lng");
  
  return [latParam , lngParam]
 }
 
 
 export default useUrlPosition


