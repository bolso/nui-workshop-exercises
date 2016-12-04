import React  from 'react';
import {Link} from 'react-router';
import DevTools from './DevTools';

import {FormattedMessage} from '@concur/nui-intl';

import LocationsList from './LocationsList';
import {Button} from '@concur/nui-widgets';

// importing browserHistory
import {browserHistory} from 'react-router';
import config from '../config';



export default React.createClass({
    componentDidMount() {
        this.props.fetchLocations();
    },

    render() {
        let {content, title, children, locations, status} = this.props;

        return (
            <div>
                {/* adding title */}
                <h1><FormattedMessage id="locations.title" /></h1>

                {/* adding add button */}
                <div className="pull-right">
                    <Button onClick={() => (
                        browserHistory.push(`${config.nui.baseUrl}/add`))}>
                        <FormattedMessage id="locations.links.AddLocation" />
                    </Button>
                </div>

                {/* nav secion removed and moved into SideBar component */}

                {/* adding locations list*/}
                <LocationsList {...{locations, status}} />

                {/*doing childer for modal routes*/}
                {children}
            </div>
        )
   }
})
