import * as React from 'react';
import { names } from './data/names';
import { ChipGroup } from './components/chipGroup/chipGroup';
import './app.css';


export default class App extends React.Component {
  constructor( props ) {
    super( props );
    const pinned = [],
          focused = '';

    this.state = {
      focused, names, pinned
    };
  }

  openDetail = focused => {
    this.setState({ focused });
  }

  closeDetail = () => {
    this.setState({ focused: '' });
  }

  pinChip = id => {
    const name = this.state.names.find( v => v.id === id );
    if( this.state.pinned.indexOf( name ) === -1 ) {
      this.setState({ pinned: [ ...this.state.pinned, name ] });
    }
  };

  unpinChip = id => {
    const pinned = this.state.pinned.filter( pin => pin.id !== id );
    this.setState({ pinned: [ ...pinned ] });
  };

  render() {
    return (
      <div className="app">
        <header className="app-header">

          <ul className="app-menu">**menu here**</ul>

        </header>
        <div className="app-body">

          <div className="app-chip-group-pinned">
            <ChipGroup chipsData={ this.state.pinned } 
              detailHandler={ this.openDetail.bind( this ) }
              pinHandler={ this.unpinChip.bind( this ) }
              isPinned={ true }/>
          </div>

          <div className="app-chip-group-main">
            <ChipGroup chipsData={ this.state.names } 
              detailHandler={ this.openDetail.bind( this ) }
              pinHandler={ this.pinChip.bind( this ) }
              isPinned={ false }/>
          </div>

        </div>
      </div>
    );
  }
}
