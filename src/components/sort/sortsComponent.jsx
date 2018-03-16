import * as React from 'react';
import { Sort } from './sort';

export const SortsComponent = ({trigger}) => {
    const sortArray = ['A-Z', 'Z-A'];

    return (
        <div className="app-sorting">
            { sortArray.map(sortArrayMap) }
        </div>
    );

    function sortArrayMap(sortVal) {
        return (
            <Sort key={ `sort_${sortVal}` }
                trigger={ triggerFactory()[sortVal] }
                name={ sortVal }/>
        );
    }

    function triggerFactory() {
        return Object.create({
            "A-Z"() { trigger('A-Z') },
            "Z-A"() { trigger('Z-A') },
        });
    }
};
