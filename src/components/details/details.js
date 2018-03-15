import * as React from 'react';

export const Details = ({ close, name }) => {
    return (
        <div>
            <div>
                <span onClick={ close }>BACK</span>
            </div>
            <div>
                {JSON.stringify(name)}
            </div>
        </div>
    );
};
