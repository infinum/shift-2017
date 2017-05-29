import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {action} from 'mobx';

import TalkList from './components/TalkList';
import Talk from './components/Talk';
import Filter from './components/Filter';

@observer
class App extends Component {
  @action onTalkClick(talk) {
    const {store} = this.props;
    store.selectedTalk = talk;
  }

  @action onFavClick() {
    const {store} = this.props;
    store.selectedTalk.favorite = !store.selectedTalk.favorite;
  }

  @action onFilterChange(filter) {
    const {store} = this.props;
    store.filter = filter;
  }

  render() {
    const {store} = this.props;

    if (store.loading) {
      return <div className="message">Loading...</div>;
    } else if (!store.talks) {
      return <div className="message">Something is wrong :(</div>;
    }

    return (
      <div className="main">
        <div className="talk-container">
          <Filter active={store.filter} onFilterChange={this.onFilterChange.bind(this)} />
          <TalkList
            talks={store.list}
            selectedTalk={store.selectedTalk}
            favorites={store.favorites}
            onTalkClick={this.onTalkClick.bind(this)}
          />
        </div>
        <div className="talk-details">
          {store.selectedTalk ? <Talk talk={store.selectedTalk} onFavClick={this.onFavClick.bind(this)} /> : 'Select a talk'}
        </div>
      </div>
    );
  }
}

export default App;
