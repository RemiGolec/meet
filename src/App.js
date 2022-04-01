import React, { Component } from 'react';
import './App.css';
import './nprogress.css';

import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';

import { mockData } from './mock-data';
import { extractLocations, getEvents } from './api';


class App extends Component {

  state = {
    numberOfEvents: 32,
    events: [],
    locations: [],
    currentLocation: 'all'
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = (numberOfEvents) => {
    console.log('called:', numberOfEvents)
    this.setState(
      {
        numberOfEvents,
      },
      this.updateEvents(this.state.currentLocation, numberOfEvents)
    );
  };


  updateEvents = (location = 'all') => {
    getEvents().then((events) => {
      const locationEvents = location === 'all'
        ? events : events.filter((event) => event.location === location);
      if (this.mounted) {
        // console.log('setting state');
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
        });
      }
    });
  }



  render() {
    let { numberOfEvents } = this.state;
    return (
      <div className="App">
        <h1>Meet Up</h1>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateNumberOfEvents={this.updateNumberOfEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
