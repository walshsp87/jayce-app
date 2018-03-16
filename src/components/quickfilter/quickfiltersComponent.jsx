import * as React from 'react';
import { Quickfilter } from './quickfilter';

export const QuickfiltersComponent = ({
    currentVal,
    trigger,
}) => {
    const valueArr = ['m', 'n', 'f', 'all'];
    
    return (
        <div className="app-quick-filters">
            {valueArr.map(valueArrMap)} 
        </div>
    );

    function triggerFactory() {
        return Object.create({
            m() { trigger('m') },
            f() { trigger('f') },
            n() { trigger('n') },
            all() { trigger('all') },
        });
    }

    function valueArrMap(gender) {
        return (
            <Quickfilter key={ `gender_${gender}` }
                gender={ gender }
                trigger={ triggerFactory()[gender] }
                isActive={ currentVal === gender } />
        );
    }
};
