import * as React from 'react';
import { Chip } from '../chip/chip';

export const ChipGroup = ({
    chipsData,
    detailHandler,
    group,
    isPinned,
    pinHandler,
}) => (
    <div className="chip-group-container">
        <div className="chip-group">
            { 
                chipsData.map( ( chipData, i ) => 
                    <Chip key={ i }
                        chipData={ chipData }
                        detailHandler={ detailHandler }
                        group={ group }
                        isPinned={ isPinned }
                        pinHandler={ pinHandler }/>
                ) 
            }
        </div>
    </div>
);
