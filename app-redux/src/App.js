import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {talkFavToggle, talkSelect, filterChange} from './actions';
import {selectedTalk, favorites, listTalks} from './selectors';
import {talkId} from './utils/helpers';

import TalkList from './components/TalkList';
import Talk from './components/Talk';
import Filter from './components/Filter';

class App extends Component {
  onTalkClick(talk) {
    this.props.talkSelect(talkId(talk));
  }

  onFavClick() {
    this.props.talkFavToggle();
  }

  onFilterChange(filter) {
    this.props.filterChange(filter);
  }

  render() {
    const {loading, talks, filter, selectedTalk, favorites, list} = this.props;

    if (loading) {
      return <div className="message">Loading...</div>;
    } else if (!talks) {
      return <div className="message">Something is wrong :(</div>;
    }

    return (
      <div className="main">
        <div className="talk-container">
          <Filter active={filter} onFilterChange={this.onFilterChange.bind(this)} />
          <TalkList
            talks={list}
            selectedTalk={selectedTalk}
            favorites={favorites}
            onTalkClick={this.onTalkClick.bind(this)}
          />
        </div>
        <div className="talk-details">
          {selectedTalk ? <Talk talk={selectedTalk} onFavClick={this.onFavClick.bind(this)} /> : 'Select a talk'}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    talks: state.talks,
    filter: state.filter,
    selectedTalk: selectedTalk(state, state.selectedTalk),
    favorites: favorites(state),
    list: listTalks(state, state.filter)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    talkFavToggle,
    talkSelect,
    filterChange
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
