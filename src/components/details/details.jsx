import * as React from 'react';

export const Details = ({ close, name }) => (
    <div>

        <h1 className="hero-title">

            <div className="detailname">{ name.name } <span className="detailgender">({ name.gender })</span></div>


        </h1>

        <div>

            <div class="orprme">
                <span className="detailorigin"><span className="headerdetails">Origin:</span> { name.origin }</span>
                <span className="detailpro"><span className="headerdetails">Pronunciation:</span> { name.pronunciation }</span>
                <span className="detailmeaning"><span className="headerdetails">Meaning:</span> { name.meaning }</span></div>


            <div className="detailhistory"><span className="headerdetails">History:</span> { name.history }</div>

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
