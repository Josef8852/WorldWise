export const formatDate =  (date : string ) : string => {

  const format =  new Intl.DateTimeFormat("en" , {
     day : "numeric",
     month : "long", 
     year : "numeric"
 
 
   }).format(new Date(date));
  
   return format ; 
 
}

export const convertToEmoji = (countryCode : string) : string => {
  const codePoints = countryCode.toUpperCase().split("").map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}