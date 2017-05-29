import React from 'react';
import {observer} from 'mobx-react';

export default observer(({onFilterChange, active}) => (
  <div className="filters">
    <div className={`filter ${active === 'main' ? 'active' : null}`} onClick={() => onFilterChange('main')}>Main</div>
    <div className={`filter ${active === 'area55' ? 'active' : null}`} onClick={() => onFilterChange('area55')}>Area 55</div>
  </div>
));
