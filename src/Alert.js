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
        this.color = 'blue';
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
            backgroundColor: Color('red').alpha(0.75).string(),
            padding: '16px',
            borderRadius: '10px',
            fontSize: '2em'
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

