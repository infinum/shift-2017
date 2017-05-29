import React from 'react';

export default ({selectedTalk, talk, onTalkClick}) => (
  <div
    className={
      `talk-item ${talk.favorite ? 'fav-on' : 'fav-off'} ${selectedTalk === talk ? 'selected' : null}`
    }
    onClick={() => onTalkClick(talk)}
  >
    <div>{talk.title}</div>
    <div>{talk.location}, {talk.time.start}-{talk.time.end}</div>
    <div>{talk.date}</div>
  </div>
);
