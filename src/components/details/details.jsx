import * as React from 'react';

export const Details = ({ close, name }) => (
    <div>

        <h1 className="hero-title">

            <div className="detailname">{ name.name } <span className="detailgender">({ name.gender })</span></div>


        </h1>

        <div>

            <div class="orprme">
            <span className="detailorigin">Origin: { name.origin }</span>
            <span className="detailpro">Pronunciation: { name.pronunciation }</span>
                <span className="detailmeaning">Meaning: { name.meaning }</span></div>


            <div className="detailhistory">History: { name.history }</div>

            <div className="similar"><span className="simheader1">Similar:</span> { name.similar.map(similarNamesMap) }</div>
        </div>

        <div className="seemorespace">
            <span className="seemore" onClick={ close }>Back/Close</span>
        </div>

    </div>
);

function similarNamesMap(name, index) {
    return (
        <div key={index}>{name}</div>
    );
}
