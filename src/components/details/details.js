import * as React from 'react';

export const Details = ({ close, name }) => (
    <div>
        <div>
            <span onClick={ close }>BACK</span>
        </div>
        <div>
            {JSON.stringify(name)}
        </div>
    </div>
);
