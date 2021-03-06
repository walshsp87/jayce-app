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
      namesConst: nameList,
      names: nameList,
    };
  }

  componentDidMount() {
    const searchInput = document.getElementById('searchbar');
    searchInput.addEventListener("keyup", this.onChangeSearch.bind(this));
  }

  componentWillUnmount() {
    const searchInput = document.getElementById('searchbar');
    searchInput.removeEventListener("keyup", this.onChangeSearch.bind(this));
  }
  
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <ul className="app-menu"></ul>
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
    window.scrollTo(0, 0);
    this.setState({ focused: '', search: '' }, () => { this.onChangeSearch() });
  }

  fullFilterFromAbbr(filterLetter) {
    switch (filterLetter) {
      case 'm': return 'Masculine';
      case 'f': return 'Feminine';
      case 'n': return 'Neutral';
      default: return 'All'
    }
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

    const searchDomEl = document.getElementById('searchbar');
    this.setState({names: nameArray, search: value}, () => {searchDomEl.value = value});
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

  openDetail(focused) {
    this.setState({ focused });
  }

  
  pinChip(id) {
    const names = this.state.namesConst;
    const name = names.find( v => v.id === id );
    name.pinned = name.pinned ? !name.pinned : true;
    const index = names.indexOf(name);
    const pinIndex = this.state.pinned.indexOf(name);
    if( pinIndex === -1 ) {
      this.setState({ pinned: [ ...this.state.pinned, name ] });
    } else {
      this.setState({ pinned: this.state.pinned.filter((name) => name.id !== id)});
    }
    this.setState({ names: [...names.slice(0, index), name, ...names.slice(index + 1)]});
  }

  receiveSearchEvent(e) {
    
  }

  renderDetailView(id) {
    const name = this.state.namesConst.find(el => el.id === id);
    return (
      <div className="app-detail-view">
        <Details name={ name } close={ this.closeDetail.bind(this) } pin={ this.pinChip.bind(this, name.id) } />
      </div>
    );
  }


  renderNameLists() {
    return [
      <div className="optionheadercenter">Filters:</div>,
      <QuickfiltersComponent key="group-filters"
        currentVal={ this.state.sorting}
        trigger={ this.onQuickFilter.bind(this)}/>,
      <div className="optionheadercenter">Sort By:</div>,
      <SortsComponent key="group-sort"
        trigger={ this.onSortChange.bind(this) }/>,

      <div className="app-chip-group-pinned" key="group-pinned">
          <div className="optionheaderpinned">Pinned:</div>
        <ChipGroup chipsData={ this.state.pinned }
          detailHandler={ this.openDetail.bind( this ) }
          pinHandler={ this.unpinChip.bind( this ) }
          isPinned={ this.isIdPinned.bind( this ) }
          group={ 'group-pinned' }/>
      </div>,

      <div className="app-chip-group-main" key="group-main">
        <div className="optionheader">Results: <span className="quickfilter-applied">({ this.fullFilterFromAbbr(this.state.quickFilter) }, </span>
      <span className="sorting-applied">{ this.state.sorting })</span></div>

        <ChipGroup chipsData={ this.state.names }
          detailHandler={ this.openDetail.bind( this ) }
          pinHandler={ this.pinChip.bind( this ) }
          isPinned={ this.isIdPinned.bind( this ) }
          group={ 'group-main' }/>
      </div>
    ]
  }

  unpinChip(id) {
    this.pinChip(id);
    // const pinned = this.state.pinned.filter( pin => pin.id !== id );
    // this.setState({ pinned: [ ...pinned ] });
  }
}
