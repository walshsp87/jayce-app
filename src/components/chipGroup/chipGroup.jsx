import * as React from 'react';
import { Chip } from '../chip/chip';

export const ChipGroup = ({ chipsData, detailHandler, pinHandler }) => (
    <div className="chip-group-container">
        <div className="chip-group">
            { chipsData.map( ( chipData, i ) => 
                <Chip key={ i }
                    chipData={ chipData }
                    detailHandler={ detailHandler }
                    pinHandler={ pinHandler }/>
            ) }
        </div>
    </div>
);
