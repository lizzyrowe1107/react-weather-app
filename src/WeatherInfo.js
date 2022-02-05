import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return(
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
            <li>
                <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            </ul>
    
            <div className="row mt-3">
            <div className="col-6">
            
                <div className="clearfix">
    
                <img src={props.data.iconUrl} alt={props.data.description} className="float-left mb-4" ></img> 
                
                <span className="temperature">{Math.round(props.data.temperature)}</span>
                <span className="unit">°C</span>
    
                
                
                </div>
            </div>
    
            <div className="col-6">
                <ul>
                <li>Precipitation: {props.data.precipitation} %</li>
                <li>Humidity: {props.data.humidity} %</li>
                <li>Wind: {props.data.wind} km/hr</li>
                </ul>
            </div>
    
            </div>

        </div>

    );
}