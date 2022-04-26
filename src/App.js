import React, { Component } from 'react';
import './App.css';
import './nprogress.css';

import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import { ErrorAlert } from './Alert';
import { WarningAlert } from './Alert';
import { extractLocations, getEvents } from './api';


class App extends Component {

  state = {
    numberOfEvents: 32,
    events: [],
    locations: [],
    currentLocation: 'all',

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
    const value = numberOfEvents;

    if (value <= 0 || value > 32) {
      this.setState({
        numberOfEvents: "",
        infoText: "choose number 1 to 32",
      });
      console.log('this.setState:', this.setState.infoText);
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: ""
      });
    }
    this.updateEvents(this.state.currentLocation, numberOfEvents);
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
    let { numberOfEvents, infoText } = this.state;
    return (
      <div className="App">
        {!navigator.onLine ? <WarningAlert
          // className="alert__offline-visible"
          text='You are not connected to the internet.' /> :
          <WarningAlert
            // className="alert__offline-hidden"
            text='back on line' />
        }
        <h1 className="title">Meet Up</h1>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateNumberOfEvents={this.updateNumberOfEvents}
        />
        {infoText &&
          <ErrorAlert text={this.state.infoText} />
        }
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
