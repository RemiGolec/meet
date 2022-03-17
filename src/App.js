import React, { Component } from 'react';
import './App.css';

import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import { mockData } from './mock-data';
import { extractLocations } from './api';

class App extends Component {

  state = {
    numberOfEvents: 12
  }

  render() {
    let { numberOfEvents } = this.state;
    return (
      <div className="App">
        <h1>Meet Up</h1>
        <CitySearch locations={extractLocations(mockData)} />
        <NumberOfEvents numberOfEvents={numberOfEvents} />
        <EventList events={mockData} />
      </div>
    );
  }
}

export default App;
