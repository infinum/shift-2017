import React, {Component} from 'react';

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
    const {store} = this.props;

    if (store.loading) {
      return <div className="message">Loading...</div>;
    } else if (!store.talks) {
      return <div className="message">Something is wrong :(</div>;
    }

    const list = []; // Filtered talks
    const favorites = []; // Favorited talks
    const selectedTalk = null; // Selected talk ovject

    return (
      <div className="main">
        <div className="talk-container">
          <Filter active={store.filter} onFilterChange={this.onFilterChange.bind(this)} />
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

export default App;
