import { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=VLWJHDDUV7FKDURXD8EZ34KHM&contentType=json`
      );
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      console.log("Error fetching Weather data", error);
    }
  };
  const handleClick = () => {
    fetchWeather();
  };
  return (
    <div className="container">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter Your City"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={handleClick}>Get Weather</button>

      {weather && (
        <div className="weather-info">
          <h3>{weather.address}</h3>
          <p>Temperature : {weather.currentConditions.temp} ⁰F</p>
          <p>Wind Speed : {weather.currentConditions.windspeed} Km/hr</p>
          <p>{weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
