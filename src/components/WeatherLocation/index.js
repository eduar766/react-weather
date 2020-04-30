import React, { Component } from 'react';
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

const data = {
    temperature: 12,
    weatherState: CLOUDY,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 8,
    weatherState: RAIN,
    humidity: 40,
    wind: '18 m/s',
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
        console.log('Actualizado');
        this.setState({
            city: 'Santiago',
            data: data2
        });
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
