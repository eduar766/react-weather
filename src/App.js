import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';


const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'El Tigre,ve',
  'Barcelona,es',
  'Bogota,col'
]

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render(){
    return (
      <div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
      </div>
    );
  }
}

export default App;
