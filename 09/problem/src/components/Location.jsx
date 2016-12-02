import React from 'react';

export default ({country, city, numEmployees}) => {

    //define sizeCode (big or small based on number of employees)
    const sizeCode =
    return (
        <div>
            {/* switch to FormattedMessage when presenting labels */}
            Country: {country} {' '}
            City: {city} {' '}
            # of Employees: {numEmployees} {' '}
            Size:
            {/* render using FormattedMessage component with dynamic id
                `locations._dynamic${sizeCode}`*/}
            {numEmployees > 10 ? "big" : "small"}
        </div>
    )
});
