import React from 'react';
import {observer} from 'mobx-react';

import Social from './Social';

export default observer(({speaker}) => (
  <div className="speaker">
    <img src={speaker.photo} alt={speaker.name} className="speaker-photo" />
    <h2>{speaker.name}</h2>
    <h3>{speaker.title}, {speaker.company}</h3>
    <div>{speaker.bio}</div>
    <ul className="social-list">
      <Social name="Twitter" social={speaker.twitter} />
      <Social name="Linkedin" social={speaker.linkedin} />
      <Social name="Github" social={speaker.github} />
    </ul>
  </div>
));
