import React from 'react';

export default ({onFilterChange, active}) => (
  <div className="filters">
    <div className={`filter ${active === 'main' ? 'active' : null}`} onClick={() => onFilterChange('main')}>Main</div>
    <div className={`filter ${active === 'area55' ? 'active' : null}`} onClick={() => onFilterChange('area55')}>Area 55</div>
  </div>
);
