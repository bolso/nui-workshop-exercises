import React  from 'react';

import LocationsList from './LocationsList';
import LocationForm from './LocationForm';

export default React.createClass({
    getInitialState() {
        return {locations: []}
    },

    componentDidMount() {
        fetch("/locations").then((res) => res.json()).then((locations) => {
            this.setState({locations});
        });
    },

    addLocation(location) {

        fetch("/location", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        }).then((res) => res.json())
        .then(locations => this.setState({locations}));
    },

    render() {
        let {locations} = this.state;

        return (
            <div>
                <LocationsList {...{locations}}/>
                <LocationForm addLocationFn={this.addLocation} />
            </div>
        )
   }

})
