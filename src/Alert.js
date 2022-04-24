import React, { Component } from 'react';
import Color from 'color';


class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }
    getStyle = () => {
        return {
            color: this.color,
        };
    }
    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}> {this.props.text} </p>
            </div>
        );
    }
}

//----------   Subclasses of Alert

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'white';
    }
    getStyle = () => {
        return {
            color: this.color,
            backgroundColor: Color('black').alpha(0.75).string(),
        }
    }
}
class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'white';
    }
    getStyle = () => {
        return {
            color: this.color,
            backgroundColor: Color('black').alpha(0.75).string(),
        }
    }

}
class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'orange';
    }
}

export { InfoAlert };
export { ErrorAlert };
export { WarningAlert };

