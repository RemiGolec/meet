import React, { Component } from 'react';


class NumberOfEvents extends Component {
    state = {
        numberOfEvents: '32',
    }

    handleInputChange = (event) => {
        // const value = event.target.value;
        this.setState({
            numberOfEvents: event.target.value,
        });
    }

    render() {
        const { numberOfEvents } = this.state
        return (
            <div>
                <p>number of events:</p>
                <input
                    className="number-events"
                    type="number"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChange} />

            </div>
        )
    }
}

export default NumberOfEvents;

