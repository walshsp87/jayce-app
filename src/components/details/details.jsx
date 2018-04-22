import * as React from 'react';

const images = {
    pin: {
        src: '/pinEmpty.png',
        alt: 'Pin Name'
    },
    unpin: {
        src: '/pinFilled.png',
        alt: 'Unpin Name'
    },
};

export const Details = ({ close, name, pin }) => (
    <div>

        <h1 className="hero-title">

            <div className="detailname">
                { name.name }
                <span className="detailgender"> ({ name.gender }) </span>
                <img onClick={ pin }
                     src={ name.pinned ? images.unpin.src : images.pin.src } 
                     alt={ name.pinned ? images.unpin.alt : images.pin.alt }
                     style={{ maxWidth: '32px'}}/>
            </div>

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
