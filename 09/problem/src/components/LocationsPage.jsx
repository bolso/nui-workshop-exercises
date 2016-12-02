import React  from 'react';
import {Link} from 'react-router';
import DevTools from './DevTools';

import config from '../config';
// import FormattedMessage from @concur/nui-intl
...


export default React.createClass({
    componentDidMount() {
        this.props.fetchLocations();
    },

    render() {
        let {content, children} = this.props;

        return (
            <div>
                <div>
                    {/*change to use FormattedMessage*/}
                    <Link to={`${config.nui.baseUrl}/`}>Locations List</Link>{' '}

                    {/*change to use FormattedMessage*/}
                    <Link to={`${config.nui.baseUrl}/add`}>Add Location</Link>{' '}
                </div>
                <hr />

                {content || children}
            </div>
        )
   }
})
