import React, {Component} from 'react';
import update from 'react-addons-update';

import TalkList from './components/TalkList';
import Talk from './components/Talk';
import Filter from './components/Filter';

import loadData from './utils/api';
import {talkId} from './utils/helpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      talks: null,
      filter: 'main',
      selectedTalk: null
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    loadData().then((data) => {
      this.setState({
        loading: false,
        talks: data
      });
    }, () => {
      this.setState({
        loading: false
      });
    });
  }

  onTalkClick(talk) {
    this.setState({
      selectedTalk: talkId(talk)
    });
  }

  onFavClick() {
    const selectedTalk = this.state.talks.find((talk) => talkId(talk) === this.state.selectedTalk);

    this.setState({
      talks: update(this.state.talks, {
        [this.state.talks.indexOf(selectedTalk)]: {
          $merge: {
            favorite: !selectedTalk.favorite
          }
        }
      })
    });
  }

  onFilterChange(filter) {
    this.setState({
      filter: filter
    });
  }

  render() {
    if (this.state.loading) {
      return <div className="message">Loading...</div>;
    } else if (!this.state.talks) {
      return <div className="message">Something is wrong :(</div>;
    }

    const list = []; // Filtered talks
    const favorites = []; // Favorited talks
    const selectedTalk = null; // Selected talk ovject

    return (
      <div className="main">
        <div className="talk-container">
          <Filter active={this.state.filter} onFilterChange={this.onFilterChange.bind(this)} />
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
