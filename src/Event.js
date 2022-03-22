import React, { Component } from "react";


class Event extends Component {
    state = {
        collapsed: true
    }

    handleClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }


    render() {
        const { event } = this.props;
        const { collapsed } = this.state;

        let startTime = event.start.dateTime.match(/\d\d:\d\d/);

        return (
            <div className="event">
                <div>
                    <h2 className="summary">{event.summary}</h2>
                    <p className="start-time">Start Time: {startTime}</p>
                    <p className="time-zone">Time Zone: {event.start.timeZone}</p>
                    <p className="location">location: {event.location}</p>
                    <button
                        className="btn-details"
                        onClick={this.handleClick}>
                        {collapsed ? "Show event details" : "Hide event details"}
                    </button>
                </div>
                {!collapsed &&
                    <div>
                        <p className="event-description">Event Details: {event.description}</p>
                    </div>
                }
            </div>

        )
    }


}

export default Event;