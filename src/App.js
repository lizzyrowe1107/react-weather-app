import './App.css';
import WeatherSearchCity from './WeatherSearchCity';

export default function App() {
  return (
    <div className="App">

    <div className= "container">
        
        <WeatherSearchCity/>
        <footer>
          This project is coded by {" "}
          
          <a href="https://itsjustliz.org" target="_blank">Liz Rowe</a> 
          
          {" "} and is {" "}

        <a href="https://github.com/lizzyrowe1107/react-weather-app" target="_blank">
         open-sourced on GitHub
        </a>
        
        </footer>

    </div>


        
      
    </div>
  );
}


