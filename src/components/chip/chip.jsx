import * as React from 'react';

export const Chip = ({ chipData:{ name, gender, id }, detailHandler, pinHandler }) => {
    const pinClick = () => {
        console.log( 'pinClick' )
        pinHandler( id );
    };

    const detailClick = () => {
        console.log( 'detailClick' )
        detailHandler( id );
    }

    return (
        <div className="chip-wrapper">
            <div className={ `chip chip-gender-${ gender }` }>
                <div className="chip-name">
                    { name }
                </div>
                <div className={`chip-pin`} onClick={ pinClick }>
                    PIN{/* TODO: REPLACE WITH PIN ICON */}
                </div>
                <div className="chip-pin" onClick={ detailClick }>
                    DETAIL{/* TODO: REPLACE WITH DETAIL ICON */}
                </div>
            </div>
        </div>
    );
};
