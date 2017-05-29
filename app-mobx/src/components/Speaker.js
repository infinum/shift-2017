import React from 'react';

import Social from './Social';

export default ({speaker}) => (
  <div className="speaker">
    <img src={speaker.photo} alt={speaker.name} className="speaker-photo" />
    <h2>{speaker.name}</h2>
    <h3>{speaker.title}, {speaker.company}</h3>
    <div>{speaker.bio}</div>
    <ul className="social-list">
      <Social name="Twitter" social={speaker.social.twitter} />
      <Social name="Linkedin" social={speaker.social.linkedin} />
      <Social name="Github" social={speaker.social.github} />
    </ul>
  </div>
);
