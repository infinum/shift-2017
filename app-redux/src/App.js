import React, {Component} from 'react';
import {connect} from 'react-redux';

import TalkList from './components/TalkList';
import Talk from './components/Talk';
import Filter from './components/Filter';

class App extends Component {
  onTalkClick(talk) {
    // TODO
  }

  onFavClick() {
    // TODO
  }

  onFilterChange(filter) {
    // TODO
  }

  render() {
    const {loading, talks, filter} = this.props;

    if (loading) {
      return <div className="message">Loading...</div>;
    } else if (!talks) {
      return <div className="message">Something is wrong :(</div>;
    }

    const list = []; // Filtered talks
    const favorites = []; // Favorited talks
    const selectedTalk = null; // Selected talk ovject

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
    filter: state.filter
  };
}

export default connect(mapStateToProps)(App);
