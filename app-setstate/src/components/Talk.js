import React from 'react';

import {formatTime} from '../utils/helpers';
import Speaker from './Speaker';

export default ({talk, onFavClick}) => (
  <div className="talk">
    <h2>{talk.title}</h2>
    <div>
      <button
        onClick={onFavClick}
        className={talk.favorite ? 'button-fav-on' : 'button-fav-off'}
      >
        Favorite
      </button>
    </div>
    <h3>{talk.location}, {formatTime(talk.time.start)}-{formatTime(talk.time.end)}</h3>
    <div>{talk.date}</div>
    {talk.speaker && <Speaker speaker={talk.speaker} />}
  </div>
);
