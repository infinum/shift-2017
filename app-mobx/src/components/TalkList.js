import React from 'react';
import {observer} from 'mobx-react';

import TalkItem from './TalkItem';

export default observer(({talks, selectedTalk, favorites, onTalkClick}) => (
  <div className="talk-list">
    <ul>
      {
        talks.map((talk) => (
          <li key={talk.id}>
            <TalkItem talk={talk} selectedTalk={selectedTalk} onTalkClick={onTalkClick} />
          </li>
        ))
      }
    </ul>
    <div className="fav-count">
      Favorites: {favorites.length}
    </div>
  </div>
));
