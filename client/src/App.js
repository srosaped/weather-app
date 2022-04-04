import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Form from 'react-bootstrap/Form';


function App() {

  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
   // if (event.cl === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=360d72420b151887160f1711b398855f`).then(
        response => response.json()
      ).then( 
        data => {
          setWeatherData(data)
          
        }
      )
    //}
    
  }

  return (
    <div className="w-container">
      <Header />

          <Form.Select
            className='select-city'
            onChange={(e) => {
              const selectedCity = e.target.value;
              setCity(selectedCity);
              
            }}
            onClick={getWeather}
          >
            <option value='null'>Choose your city...</option>
            <option value="Lisbon">Lisbon</option>
            <option value="Leiria">Leiria</option>
            <option value="Coimbra">Coimbra</option>
            <option value="Porto">Porto</option>
            <option value="Faro">Faro</option>
          </Form.Select>
          {typeof weatherData.main === 'undefined' ? (
            <div>
              <h2 className='sub-title'>Please choose your city wisely!</h2>
            </div>
          ) : (
          
          <div className="weather-widget">
            <p className='w-name'>{weatherData.name}</p>
            <p className='w-temp'>{Math.round(weatherData.main.temp)}ºF</p>
            <p className='w-sky'>{weatherData.weather[0].main}</p>
            <img alt='icon' className='w-icon' src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}/>
          </div>
          )}

          {weatherData.cod === "404" ? (
            <p className='err-404'>Please choose a city from the dropdown</p>
          ): (
            <>
            </>
          )}
    </div>
  );
}

export default App;
