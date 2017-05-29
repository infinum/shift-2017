import React from 'react';
import {observer} from 'mobx-react';

export default observer(({selectedTalk, talk, onTalkClick}) => (
  <div
    className={
      `talk-item ${talk.favorite ? 'fav-on' : 'fav-off'} ${selectedTalk === talk ? 'selected' : null}`
    }
    onClick={() => onTalkClick(talk)}
  >
    <div>{talk.title}</div>
    <div>{talk.location}, {talk.displayStart}-{talk.displayEnd}</div>
    <div>{talk.day}</div>
  </div>
));
