import React  from 'react';
import {Link} from 'react-router';
import DevTools from './DevTools';

//imporing config
import config from '../config';

export default React.createClass({
    componentDidMount() {
        this.props.fetchLocations();
    },

    render() {
        let {content, children} = this.props;

        return (
            <div>
                <div>
                    {/*changing links*/}
                    <Link to={`${config.nui.baseUrl}/`}>Locations List</Link>{' '}
                    <Link to={`${config.nui.baseUrl}/add`}>Add Location</Link>{' '}
                </div>
                <hr />

                {content || children}
            </div>
        )
   }
})
