import React, { Component } from 'react';


class NumberOfEvents extends Component {
    render() {
        const { numberOfEvents } = this.props
        return (
            <div>
                <p>number of events: {numberOfEvents.length}</p>
            </div>
        )
    }
}

export default NumberOfEvents;
