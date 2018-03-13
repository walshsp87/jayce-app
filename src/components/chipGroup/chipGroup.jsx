import * as React from 'react';
import { Chip } from '../chip/chip';

export const ChipGroup = ({ chipsData, detailHandler, isPinned, pinHandler }) => (
    <div className="chip-group-container">
        <div className="chip-group">
            { chipsData.map( ( chipData, i ) => 
                <Chip key={ i }
                    chipData={ chipData }
                    detailHandler={ detailHandler }
                    isPinned={ isPinned }
                    pinHandler={ pinHandler }/>
            ) }
        </div>
    </div>
);
