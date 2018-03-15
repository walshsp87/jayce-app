import * as React from 'react';
import { names } from './data/names';
import { ChipGroup } from './components/chipGroup/chipGroup';
import { Details } from './components/details/details';
import './app.css';

export default class App extends React.Component {
  constructor( props ) {
    super( props );
    const pinned = [];
    const focused = '';
    const search = '';

    this.state = {
      focused,
      names,
      pinned,
      search,
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

  isIdPinned = id => this.state.pinned.filter(val => val.id === id).length > 0;

  onChangeSearch = (event) => {
    this.setState({search: event.target.value})
  }

  renderNameLists = () => ([
    <div className="app-searchbar">
      <input className="searchbar" type="text" onChange={ this.onChangeSearch.bind(this) }/>
    </div>,
    <div className="app-quick-filters" style={{color: 'red'}}>
      ADD QUICK FILTER COMPONENT
    </div>,
    <div className="app-sorting" style={{color: 'red'}}>
      ADD SORT COMPONENT
    </div>,
    <div className="app-chip-group-pinned" key="group-pinned">
      <ChipGroup chipsData={ this.state.pinned } 
        detailHandler={ this.openDetail.bind( this ) }
        pinHandler={ this.unpinChip.bind( this ) }
        isPinned={ this.isIdPinned.bind( this ) }
        group={ 'group-pinned' }/>
    </div>,
    <div className="app-chip-group-main" key="group-main">
      <ChipGroup chipsData={ this.state.names } 
        detailHandler={ this.openDetail.bind( this ) }
        pinHandler={ this.pinChip.bind( this ) }
        isPinned={ this.isIdPinned.bind( this ) }
        group={ 'group-main' }/>
    </div>
  ]);

  renderDetailView = id => {
    const name = this.state.names.find(el => el.id === id);
    return (
      <div className="app-detail-view">
        <Details name={ name } close={ this.closeDetail } />
      </div>
    );
  };

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <ul className="app-menu">**menu here**</ul>
        </header>
        <div className="app-body">
          {
            this.state.focused.length === 0
              ? this.renderNameLists()
              : this.renderDetailView(this.state.focused)
          }
        </div>
      </div>
    );
  }
}
