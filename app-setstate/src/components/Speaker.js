import React from 'react';

import {formatTwitter, formatLinkedin, formatGithub} from '../utils/helpers';
import Social from './Social';

export default ({speaker}) => (
  <div className="speaker">
    <img src={speaker.photo} alt={speaker.name} className="speaker-photo" />
    <h2>{speaker.name}</h2>
    <h3>{speaker.title}, {speaker.company}</h3>
    <div>{speaker.bio}</div>
    <ul className="social-list">
      <Social name="Twitter" social={formatTwitter(speaker.social)} />
      <Social name="Linkedin" social={formatLinkedin(speaker.social)} />
      <Social name="Github" social={formatGithub(speaker.social)} />
    </ul>
  </div>
);
