import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        // console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    //console.log(props); to see what properties we are recieving

    // when loaded, show this section:
    if (loaded) {
        //console.log(forecast);

        return (

            <div className="WeatherForecast">
                <div className="row">

                    {forecast.map(function(dailyForecast, index) {

                        if (index < 6) {
                            return (
    
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );

                        } else {

                            return null;

                        }

                    })}
                    
    
                </div>
    
            </div>
    
        );


    // when not loaded show nothing
    } else {
        let apiKey = "bad7d22d20acf170eb966f0d0727a2fc";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;
    }

    
}