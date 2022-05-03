import React, { Component } from 'react';
import Color from 'color';


class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.padding = "5px";
    }
    getStyle = () => {
        return {
            color: this.color,
            padding: this.padding
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
            backgroundColor: Color('#414464').alpha(1).string(),
            padding: "0.2em",
            width: "250px",
            borderRadius: "7px"
        }
    }
}
class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#ffffff';
    }
    getStyle = () => {
        return {
            color: this.color,
            backgroundColor: Color('#ff5449').alpha(1).string(),
            padding: "0.2em",
            width: "250px",
            margin: "auto",
            borderRadius: "7px"
        }
    }

}
class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'white';
    }
    getStyle = () => {
        return {
            color: this.color,
            backgroundColor: Color('orange').alpha(0.75).string(),
        }
    }
}

export { InfoAlert };
export { ErrorAlert };
export { WarningAlert };

