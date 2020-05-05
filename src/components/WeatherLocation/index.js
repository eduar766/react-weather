import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import { api_weather } from './../../constants/api_url';
import './style.css';
import transformWeather from './../../services/transformWeather';
import {
    CLOUDY,
} from './../../constants/weathers';

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
            city: "Santiago, cl",
            data: null
        };
        console.log('constructor');
    }

    componentDidMount() {
        this.handleUpdateClick();
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
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
    };

    render() {
        console.log('render');
        const {city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                { data ?
                    <WeatherData data={data} /> :
                    <CircularProgress/> }
                {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}
            </div>
        );
    }
};

export default WeatherLocation;
