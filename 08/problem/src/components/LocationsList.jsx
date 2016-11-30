import React  from 'react';
import Location from './Location';

export default ({locations}) => (
    <div>
        <ul>
        {locations && locations.map(location =>
            <li key={location.id}>
                <Location {...location} />
            </li>)}
        </ul>
    </div>
)
