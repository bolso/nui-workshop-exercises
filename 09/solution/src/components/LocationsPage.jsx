import React  from 'react';
import {Link} from 'react-router';
import DevTools from './DevTools';

//importing FormattedMessage
import {FormattedMessage} from '@concur/nui-intl';

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
                    <Link to={`${config.nui.baseUrl}/`}>
                        <FormattedMessage id="locations.links.LocationsList" />
                    </Link>{' | '}
                    <Link to={`${config.nui.baseUrl}/add`}>
                        <FormattedMessage id="locations.links.AddLocation" />
                    </Link>{' '}
                </div>
                <hr />

                {content || children}
            </div>
        )
   }
})
