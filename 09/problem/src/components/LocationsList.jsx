import React  from 'react';
import Location from './Location';

//import FormattedMessage, FormattedCurrency from @concur/nui-intl

// wrap into withFormatter HOC, make sure formatter is in properties
export default ({locations}) => {
    const locationRent = 100;

    // calculate totalRent based on number of locations and locationRent
    const totalRent = ...

    //calculate totalEmployees using array reduce method,
    //format it as currency using formattedCurrency method
    const totalEmployees = ...

    // format into user locale using formattedDate method of formatter
    const today = ...

    return {
        <div>
            <ul>
                {locations && locations.map(location =>
                    <li key={location.id}>
                        <Location {...location} />
                    </li>
                )}
            </ul>

             {/* render location.totalEmployees message */}
             ...

             {/* render location.totalRent message */}
             ...

             {/* render location.totalRent amount using FormattedCurrency component */}
             ...

        </div>
    }
)
