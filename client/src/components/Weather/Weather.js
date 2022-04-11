import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import axios from 'axios';

import '../Weather/weather.css';

import { useAuth0 } from '@auth0/auth0-react';

function Weather() {

    const { isAuthenticated } = useAuth0();

    const [lisbon, setLisbon] = useState([]);
    const [leiria, setLeiria] = useState([]);
    const [coimbra, setCoimbra] = useState([]);
    const [porto, setPorto] = useState([]);
    const [faro, setFaro] = useState([]);
    
    const date = new Date().toLocaleDateString('PT');

    const url_api = process.env.REACT_APP_WEATHER_API_URL;

    function loadWeather() {
        axios.get(url_api).then(res => {
            setLisbon(res.data.list[0]);
            setLeiria(res.data.list[1]);
            setCoimbra(res.data.list[2]);
            setPorto(res.data.list[3]);
            setFaro(res.data.list[4]);
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => { loadWeather() },[]);


    return (
        isAuthenticated && (
            <>
                {typeof lisbon.main === 'undefined' ? (
                    <div>
                        <h2 className='sub-title'>Looks that something went wrong!!</h2>
                    </div>
                ) : (
                    <Container>
                        <Row>
                            <Col className="weather-widget m-3">
                                <p className='w-name'>{lisbon.name}, PT</p>
                                <p className='w-date'>{date}</p>
                                <p className='w-temp'>{Math.round(((lisbon.main.temp - 273.15) * 100) / 100)}ºC</p>
                                <div className='w-description'>
                                    <img alt='icon' className='w-icon' src={`http://openweathermap.org/img/wn/${lisbon.weather[0].icon}.png`} />
                                    <p className='w-sky'>{lisbon.weather[0].description}</p>
                                </div>
                            </Col>
                            <Col className="weather-widget m-3">
                                <p className='w-name'>{leiria.name}, PT</p>
                                <p className='w-date'>{date}</p>
                                <p className='w-temp'>{Math.round(((leiria.main.temp - 273.15) * 100) / 100)}ºC</p>
                                <div className='w-description'>
                                    <img alt='icon' className='w-icon' src={`http://openweathermap.org/img/wn/${leiria.weather[0].icon}.png`} />
                                    <p className='w-sky'>{leiria.weather[0].description}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="weather-widget m-3">
                                <p className='w-name'>{coimbra.name}, PT</p>
                                <p className='w-date'>{date}</p>
                                <p className='w-temp'>{Math.round(((coimbra.main.temp - 273.15) * 100) / 100)}ºC</p>
                                <div className='w-description'>
                                    <img alt='icon' className='w-icon' src={`http://openweathermap.org/img/wn/${coimbra.weather[0].icon}.png`} />
                                    <p className='w-sky'>{coimbra.weather[0].description}</p>
                                </div>
                            </Col>
                            <Col className="weather-widget m-3">
                                <p className='w-name'>{porto.name}, PT</p>
                                <p className='w-date'>{date}</p>
                                <p className='w-temp'>{Math.round(((porto.main.temp - 273.15) * 100) / 100)}ºC</p>
                                <div className='w-description'>
                                    <img alt='icon' className='w-icon' src={`http://openweathermap.org/img/wn/${porto.weather[0].icon}.png`} />
                                    <p className='w-sky'>{porto.weather[0].description}</p>
                                </div>
                            </Col>
                            <Col className="weather-widget m-3">
                                <p className='w-name'>{faro.name}, PT</p>
                                <p className='w-date'>{date}</p>
                                <p className='w-temp'>{Math.round(((faro.main.temp - 273.15) * 100) / 100)}ºC</p>
                                <div className='w-description'>
                                    <img alt='icon' className='w-icon' src={`http://openweathermap.org/img/wn/${faro.weather[0].icon}.png`} />
                                    <p className='w-sky'>{faro.weather[0].description}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                )}
            </>
        )
    );
}

export default Weather;