import * as React from 'react';

export const Details = ({ close, name }) => (
    <div>

        <h1 className="hero-title">

            <div>Name: { name.name }</div>


            <div className="app-searchbar" key="group-searchbar">
                <input className="searchbar" type="text" placeholder="Search Names - ex. &ldquo;Larkin&rdquo; or &ldquo;German&rdquo;" onChange={ this.onChangeSearch.bind(this) }/>
            </div>




        </h1>

        <div>
            <div>Gender: { name.gender }</div>
            <div>Origin: { name.origin }</div>
            <div>Pronunciation: { name.pronunciation }</div>
            <div>Meaning: { name.meaning }</div>
            <div>History: { name.history }</div>
            <div>Similar: { name.similar.map(similarNamesMap) }</div>
        </div>

        <div>
            <span onClick={ close }>Back/Close</span>
        </div>

    </div>
);

function similarNamesMap(name, index) {
    return (
        <div key={index}>{name}</div>
    );
}
