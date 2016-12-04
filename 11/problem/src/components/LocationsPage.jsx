import React  from 'react';
import {Link} from 'react-router';
import DevTools from './DevTools';

import {FormattedMessage} from '@concur/nui-intl';

import LocationsList from './LocationsList';
import {Button} from '@concur/nui-widgets';

import {browserHistory} from 'react-router';
import config from '../config';



export default React.createClass({
    componentDidMount() {
        this.props.fetchLocations();
    },

    render() {
        let {
            content,
            title,
            children,
            locations,
            status,
            resetStatus
        } = this.props;

        return (
            <div>
                <h1><FormattedMessage id="locations.title" /></h1>

                <div className="pull-right">
                    <Button onClick={() => (
                        resetStatus();
                        browserHistory.push(`${config.nui.baseUrl}/add`))}>
                        <FormattedMessage id="locations.links.AddLocation" />
                    </Button>
                </div>

                <LocationsList {...{locations, status}} />

                {children}
            </div>
        )
   }
})
