import * as React from 'react';

export const Quickfilter = ({gender, trigger, isActive}) => {
    return (
        <div className={ classNameRender(isActive) }
            onClick={ trigger }
            >{ fullGender(gender) }</div> 
    );
    
    function classNameRender(active) {
        return active ? `active ${gender}` : gender;
    }

    function fullGender(g) {
        if (g === 'm') return 'Masculine';
        if (g === 'f') return 'Feminine';
        if (g === 'n') return 'Neutral';
        return 'All';
    }
}