import React from 'react';
import './App.css';

import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import { mockData } from './mock-data';

function App() {
  return (
    <div className="App">
      <CitySearch locations={mockData} />
      <NumberOfEvents numberOfEvents={mockData} />
      <EventList events={mockData} />
    </div>
  );
}

export default App;
