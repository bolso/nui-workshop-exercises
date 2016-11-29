import React  from 'react';
import {Link} from 'react-router';

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
        .then(location => this.setState({
            locations: [...this.state.locations, location]}));
    },

    render() {
        let {locations} = this.state;
        let {content, children} = this.props;

        return (
            <div>
                <div>
                    <Link to="/">Locations List</Link>{' '}
                    <Link to="/add">Add Location</Link>{' '}
                </div>
                <hr />

                {React.cloneElement(content || children, {
                    ...{locations}, ...{addLocation: this.addLocation}})
                }

            </div>
        )
   }
})
