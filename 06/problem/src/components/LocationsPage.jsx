import React  from 'react';
import {Link} from 'react-router';

//import DevTools from ../containers/DevTools
...


export default React.createClass({
    // remove get initial State
    getInitialState() {
        return {locations: []}
    },

    componentDidMount() {
        // call fetchLocations from properties
        fetch("/locations").then((res) => res.json()).then((locations) => {
            this.setState({locations});
        });
    },

    // remove this function it is defined in modules/locations.js
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
        // no need for locations in this component, remove
        let {locations} = this.state;

        let {content, children} = this.props;

        return (
            <div>
                {/* render DevTools */}
                ...
                <div>
                    <Link to="/">Locations List</Link>{' '}
                    <Link to="/add">Add Location</Link>{' '}
                </div>
                <hr />
                {/* just render content || childern do not pass properties */}
                {React.cloneElement(content || children, {
                    ...{locations}, ...{addLocation: this.addLocation}})
                }
            </div>
        )
   }
})
