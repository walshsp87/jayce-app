import * as React from 'react';

export const Details = ({ close, name }) => (
    <div>
        <div>
            <span onClick={ close }>Back/Close</span>
        </div>
        <div>
            <div>ID: { name.id }</div>
            <div>NAME: { name.name }</div>
            <div>GENDER: { name.gender }</div>
            <div>ORIGIN: { name.origin }</div>
            <div>PRONUNCIATION: { name.pronunciation }</div>
            <div>MEANING: { name.meaning }</div>
            <div>HISTORY: { name.history }</div>
            <div>SIMILAR: { name.similar.map(similarNamesMap) }</div>
        </div>
    </div>
);

function similarNamesMap(name) {
    return (
        <div>{name}</div>
    );
}
