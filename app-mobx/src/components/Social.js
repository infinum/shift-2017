import React from 'react';
import {observer} from 'mobx-react';

export default observer(({social, name}) => social.link ? (
  <li className="social">
    {name}: <a href={social.link}>{social.displayName}</a>
  </li>
) : null);
