import * as React from 'react';
import { names } from './data/names';
import { ChipGroup } from './components/chipGroup/chipGroup';
import { Details } from './components/details/details';
import { QuickfiltersComponent } from './components/quickfilter/quickfiltersComponent';
import { SortsComponent } from './components/sort/sortsComponent';
import './app.css';

export default class App extends React.Component {
  constructor( props ) {
    super( props );
    const pinned = [];
    const focused = '';
    const search = '';
    const quickFilter = 'all';
    const sorting = 'A-Z';
    const nameList = [...names].sort(App.sortingByName.bind(this));

    this.state = {
      focused,
      pinned,
      quickFilter,
      search,
      sorting,
      names: nameList,
    };
  }
  
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

  static sortingByName(a, b) {
    if (this.state && this.state.sorting === 'Z-A') {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    }
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  closeDetail() {
    this.setState({ focused: '' });
  }

  openDetail(focused) {
    this.setState({ focused });
  }

  isIdPinned(id) {
    return this.state.pinned.filter(val => val.id === id).length > 0;
  }

  onChangeSearch(event) {
    const value = event ? event.target.value : this.state.search;
    const nameArray = [...names]
    .filter((name) => name.name.toLowerCase().includes(value.toLowerCase()))
    .filter((name) => {
      if (this.state.quickFilter === 'all') return true;
      return name.gender === this.state.quickFilter;
    })
    .sort(App.sortingByName.bind(this));
    this.setState({names: nameArray, search: value});
  }

  onQuickFilter(quickFilter) {
    this.setState({quickFilter}, () => {this.onChangeSearch()});
  }

  onSortChange(sorting) {
    this.setState({sorting}, () => {
      const nameArray = [...names].sort(App.sortingByName.bind(this));
      this.setState({names: nameArray});
    });
  }

  pinChip(id) {
    const name = this.state.names.find( v => v.id === id );
    if( this.state.pinned.indexOf( name ) === -1 ) {
      this.setState({ pinned: [ ...this.state.pinned, name ] });
    }
  }

  renderDetailView(id) {
    const name = this.state.names.find(el => el.id === id);
    return (
      <div className="app-detail-view">
        <Details name={ name } close={ this.closeDetail.bind(this) } />
      </div>
    );
  }

  renderNameLists() {
    return [
      <div className="app-searchbar" key="group-searchbar">
        <input className="searchbar" type="text" onChange={ this.onChangeSearch.bind(this) }/>
      </div>,
      <QuickfiltersComponent key="group-filters"
        currentVal={ this.state.sorting}
        trigger={ this.onQuickFilter.bind(this)}/>,
      <SortsComponent key="group-sort"
        trigger={ this.onSortChange.bind(this) }/>,
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
    ]
  }

  unpinChip(id) {
    const pinned = this.state.pinned.filter( pin => pin.id !== id );
    this.setState({ pinned: [ ...pinned ] });
  }
}
