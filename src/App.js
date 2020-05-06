import React from 'react';
import LocationList from './components/LocationList';
import './App.css';


const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'El Tigre,ve',
  'Barcelona,es',
  'Bogota,col'
]

function App() {
  return (
    <div className="App">
      <LocationList cities={cities}/>
    </div>
  );
}

export default App;
