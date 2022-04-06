import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import '../Weather/weather.css';
import { useAuth0 } from '@auth0/auth0-react';

function Weather() {

    const [weatherData, setWeatherData] = useState([{}]);
    const [city, setCity] = useState('');
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = process.env.REACT_APP_WEATHER_API_URL;
    const url_api = `${url}weather?q=${city}&appid=${apiKey}`;
    const { isAuthenticated } = useAuth0();

    const getWeather = () => {
        axios.get(url_api).then(res => {
            setWeatherData(res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        isAuthenticated && (
        <>
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
                    <p className='w-name'>{weatherData.name}, PT</p>
                    <p className='w-date'>{new Date().toLocaleDateString()}</p>
                    <p className='w-temp'>{Math.round(weatherData.main.temp)}ºF</p>
                    <div className='w-description'>
                        <img alt='icon' className='w-icon' src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} />
                        <p className='w-sky'>{weatherData.weather[0].description}</p>
                    </div>
                </div>
            )}

            {weatherData.cod === "404" ? (
                <p className='err-404'>Please choose a city from the dropdown</p>
            ) : (
                <>
                </>
            )}
        </>
        )
    );
}

export default Weather;