import React from 'react';

export default ({social, name}) => social.link ? (
  <li className="social">
    {name}: <a href={social.link}>{social.displayName}</a>
  </li>
) : null;
