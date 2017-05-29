import React from 'react';
import {observer} from 'mobx-react';

import Speaker from './Speaker';

export default observer(({talk, onFavClick}) => (
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
    <h3>{talk.location}, {talk.displayStart}-{talk.displayEnd}</h3>
    <div>{talk.day}</div>
    {talk.speaker && <Speaker speaker={talk.speaker} />}
  </div>
));
