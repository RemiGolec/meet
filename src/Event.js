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
        return (
            <>
                <div>
                    <p>Events Title: {event.summary}</p>
                    <button
                        onClick={this.handleClick}>
                        {collapsed ? "Show event details" : "Hide event details"}
                    </button>
                </div>
                {!collapsed &&
                    <div>
                        <p>Event Details: {event.description}</p>
                    </div>
                }
            </>

        )
    }


}

export default Event;