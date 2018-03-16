import * as React from 'react';
import { Quickfilter } from './quickfilter';

export const QuickfiltersComponent = ({
    currentVal,
    trigger,
}) => {
    const triggers = {
        m() { trigger('m') },
        f() { trigger('f') },
        n() { trigger('n') },
        all() { trigger('all') },
    };
    const valueArr = ['m', 'n', 'f', 'all'];
    const valueArrMap = (gender) => (
        <Quickfilter key={ `gender_${gender}` }
            gender={ gender }
            trigger={ triggers[gender] }
            isActive={ currentVal === gender } />
    );
    
    
    return (
        <div className="app-quick-filters">
            {valueArr.map(valueArrMap)} 
        </div>
    );
}