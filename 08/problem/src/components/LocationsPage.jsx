import React  from 'react';
import {Link} from 'react-router';
import DevTools from './DevTools';

// import config
...
export default React.createClass({
    componentDidMount() {
        this.props.fetchLocations();
    },

    render() {
        let {content, children} = this.props;

        return (
            <div>
                <DevTools />
                <div>
                    {/* Change links to point to baseUrl defined location */}
                    <Link to="/">Locations List</Link>{' '}
                    <Link to="/add">Add Location</Link>{' '}
                </div>
                <hr />

                {content || children}
            </div>
        )
   }
})
