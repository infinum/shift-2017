import React from 'react';

import {formatTime} from '../utils/helpers';

export default ({selectedTalk, talk, onTalkClick}) => (
  <div
    className={
      `talk-item ${talk.favorite ? 'fav-on' : 'fav-off'} ${selectedTalk === talk ? 'selected' : null}`
    }
    onClick={() => onTalkClick(talk)}
  >
    <div>{talk.title}</div>
    <div>{talk.location}, {formatTime(talk.time.start)}-{formatTime(talk.time.end)}</div>
    <div>{talk.date}</div>
  </div>
);
