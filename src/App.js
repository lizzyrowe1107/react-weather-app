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
        
      </header>
    </div>
  );
}

export default App;
