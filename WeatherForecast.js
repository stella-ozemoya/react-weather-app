import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"


export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {  
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    let apiKey = "3f6be1c407b0d9d1933561808db358ba";
    let longtitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?
    // lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`  
  
    return null;
    
  } else {
    return (
      <div className="WeatherForecast">
     <div className="row">
       <div className="col">
         <div className="WeatherForecastDay">{forecast[0].dt}
           <div className="WeatherForecast-day">Thu</div>
           <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
           <div className="WeatherForecast-temperatures">
             <span className="WeatherForecast-temperature-max">
              {forecast[0].temp.max}°</span>
             <span className="WeatherForecast-temperature-min">
              {forecast[0].temp.min}°</span>
           </div>
         </div>
       </div>
     </div>
   </div>
     
   ); 
    
  }
    
  }


