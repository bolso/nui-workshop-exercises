import React from 'react';

export default ({country, city, numEmployees}) => (
    <div>
        Country: {country} {' '}
        City: {city} {' '}
        # of Employees: {numEmployees} {' '}
        Size: {numEmployees > 10 ? "big" : "small"}
    </div>
);
