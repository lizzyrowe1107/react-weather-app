import axios from "axios";
import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function WeatherSearchCity(props) {

  //state to update city name
  const [city, setCity] = useState(props.defaultCity)

  //state to update weather data
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
      icon: response.data.weather[0].icon
    });
  }

  function search() {
    // city
    let apiKey = "bad7d22d20acf170eb966f0d0727a2fc";
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

  }

  //handles submit of the form
  function handleSubmit(event) {
    event.preventDefault();
    
    //test to see what pops up when someone submits "paris" (ex. Should be paris)
    //alert(city)

    // search for a city
    search()


  }

  //handles city change in input
  function handleCityChange(event) {
    setCity(event.target.value);
  }

 // if weatherData is ready then display weather app
  if (weatherData.ready) {
    return (
      <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}></input>
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"></input>
              </div>
            </div>
  
          </form>

          <WeatherInfo data={weatherData} />
          <WeatherForecast />
  
        
      
      </div>
    );

  // else make api call
  } else {

    //how does it know to search "city"? Maybe because we are passing a defaultCity to WeatherSearchCity
    search(city);

    return "Loading..."
    
  }


  
}
