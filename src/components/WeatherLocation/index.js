import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    FOG
} from './../../constants/weathers';

const location = 'Santiago, cl';
const api_key = '6a7f97e1b94de709c71893d611d990e1';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 12,
    weatherState: CLOUDY,
    humidity: 10,
    wind: '10 m/s',
}


/* const WeatherLocation = () => (
     <div className="weatherLocationCont">
         <Location city={'Santiago'} />
         <WeatherData data={data} />
     </div>
 );    <-- Functional component */

 class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
            data: data
        };
    }

    getTemp = kelvin => {
        return Number(convert(kelvin).from('K').to('C').toFixed(2))
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const { name } = weather_data.name;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
            name,
        }

        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            this.setState({
                city: location,
                data: newWeather
            })
            
        });

        /*this.setState({
            city: 'Santiago',
            data: data2
        });*/
    };

    render() {
        const {city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;
