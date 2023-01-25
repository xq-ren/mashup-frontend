import React from 'react';
import './App.css';
import FlightsComponent from './components/FlightsComponent';
//import WeatherComponent from './components/WeatherComponent';

function App() {
  return (
    <div>
      <header className="container">
         <FlightsComponent />
      </header>
    </div>
  );
}

export default App;
