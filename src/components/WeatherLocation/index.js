import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { api_weather } from './../../constants/api_url';
import './style.css';
import transformWeather from './../../services/transformWeather';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    FOG
} from './../../constants/weathers';



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

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
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
