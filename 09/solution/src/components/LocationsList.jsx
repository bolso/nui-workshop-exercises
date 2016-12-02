import React  from 'react';
import Location from './Location';

import {withFormatter, FormattedMessage, FormattedCurrency} from '@concur/nui-intl';


export default withFormatter(({locations, formatter}) => {
    const today = formatter.formattedDate({value: new Date()});
    const totalEmployees = formatter.formattedNumber({
        value:  locations.reduce((sum, location) => (location.numEmployees + sum), 0)
    });

    const locationRent = 100;
    const totalRent = locationRent * locations.length;

    return (
        <div>
            <ul>
            {locations && locations.map(location =>
                <li key={location.id}>
                    <Location {...location} />
                </li>)}
            </ul>
            <p />
            <FormattedMessage id="locations.totalEmployees"
                values={{today, total: totalEmployees}} />

             <br />

             <FormattedMessage id="locations.totalRent"
                    values={{locationRent:
                        formatter.formattedCurrency({value: locationRent, currency: 'EUR'})
                    }} />:

            <FormattedCurrency value={totalRent} currency='EUR' />

    </div>

)});
