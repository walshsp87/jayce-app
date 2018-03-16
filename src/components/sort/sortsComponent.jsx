import * as React from 'react';
import { Sort } from './sort';

export const SortsComponent = ({trigger}) => {
    const sortArray = ['A-Z', 'Z-A'];
    const triggers = {
        "A-Z"() { trigger('A-Z') },
        "Z-A"() { trigger('Z-A') },
    };
    const sortArrayMap = (sortVal) => (
        <Sort key={ `sort_${sortVal}` }
            trigger={ triggers[sortVal] }
            name={ sortVal }/>
    );

    return (
        <div className="app-sorting">
            { sortArray.map(sortArrayMap) }
        </div>
    );
}

// <div className="app-sorting" key="group-sort">
//   <div onClick={ this.onSortChange.bind(this, 'A-Z') }>A-Z</div>
//   <div onClick={ this.onSortChange.bind(this, 'Z-A') }>Z-A</div>
// </div>