import './App.css';
import WeatherSearchCity from './WeatherSearchCity';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>
          My Weather App
        </h1>
        <WeatherSearchCity city="Paris"/>

        <a href="https://github.com/lizzyrowe1107/react-weather-app">
          GitHub Link
        </a>
        
      </header>
    </div>
  );
}

export default App;
