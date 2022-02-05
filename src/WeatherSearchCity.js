import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherSearchCity(props) {
  
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    //console.log(response.data)

    setWeatherData({
      //set ready to true
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      precipitation: "15",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    });
  }

 // if weatherData is ready then display weather app
  if (weatherData.ready) {
    return (
      <div className="Weather">
          <form>
            <div className="row">
              <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"></input>
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"></input>
              </div>
            </div>
  
          </form>
  
  
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
  
        <div className="row mt-3">
          <div className="col-6">
           
            <div className="clearfix">
  
              <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left mb-4" ></img> 
              
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">°C</span>
  
              
            
            </div>
          </div>
  
          <div className="col-6">
            <ul>
            <li>Precipitation: {weatherData.precipitation} %</li>
            <li>Humidity: {weatherData.humidity} %</li>
            <li>Wind: {weatherData.wind} km/hr</li>
            </ul>
          </div>
  
        </div>
      
      </div>
    );

  // else make api call
  } else {

    let apiKey = "bad7d22d20acf170eb966f0d0727a2fc";
    
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
    
  }


  
}
