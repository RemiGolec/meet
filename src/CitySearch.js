import React, { Component } from 'react';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            console.log(location, "location");
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        this.setState({
            query: value,
            suggestions,
        });
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false
        });

        this.props.updateEvents(suggestion);
    }

    render() {
        let { showSuggestions, suggestions, query, infoText } = this.state;
        return (
            <div className="CitySearch">
                <p>Choose your nearest city</p>
                <input className="city"
                    type="text"
                    placeholder='Choose your city'
                    value={query}
                    onChange={this.handleInputChanged}
                    onFocus={() => { this.setState({ showSuggestions: true }) }}
                />
                <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                        >{suggestion}</li>
                    ))}
                    <li onClick={() => this.handleItemClicked("all")}>
                        <b>See all cities</b>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CitySearch;

