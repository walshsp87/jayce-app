import * as React from 'react';

export const Chip = ({ chipData:{ name, gender, id }, detailHandler, isPinned, pinHandler }) => {
    const pin = '/pinEmpty.png';
    const unpin = '/pinfilled.png';
    const pinImg = isPinned ? unpin : pin;
    const pinAlt = isPinned ? 'Unpin' : 'Pin'

    const pinClick = () => {
        pinHandler( id );
    };

    const detailClick = () => {
        detailHandler( id );
    };

    return (
        <div className="chip-wrapper">
            <div className={ `chip chip-gender-${ gender }` } onClick={ detailClick }>
                <div className="chip-name">
                    { name }
                </div>
                <div className={`chip-pin`} onClick={ pinClick }>
                    <img src={ pinImg } alt={ pinAlt }/>
                </div>
            </div>
        </div>
    );
};
