import * as React from 'react';

export const Chip = ({
    chipData:{ name, gender, id },
    detailHandler,
    group,
    isPinned,
    pinHandler,
}) => {
    if (group === 'group-main' && isPinned(id)) return null;

    const pin = '/pinEmpty.png';
    const unpin = '/pinFilled.png';
    const pinImg = isPinned(id) ? unpin : pin;
    const pinAlt = isPinned(id) ? 'Unpin' : 'Pin';

    return (
        <div className="chip-wrapper">
            <div className={ `chip chip-gender-${ gender }` }>
                <div className="chip-name" onClick={ detailClick }>
                    { name }
                </div>
                <div className={`chip-pin`} onClick={ pinClick }>
                    <img src={ pinImg } alt={ pinAlt } style={{ maxWidth: '20px'}}/>
                </div>
            </div>
        </div>
    );    

    function detailClick() {
        detailHandler(id);
    }

    function pinClick() {
        pinHandler(id);
    }
};
