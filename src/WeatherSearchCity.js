import React from "react";
import axios from 'axios';

export default function WeatherSearchCity(props) {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp} C`)
    }
    
    let apiKey = "bad7d22d20acf170eb966f0d0727a2fc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <h1>
            Hello from weather app
        </h1>
    )

}