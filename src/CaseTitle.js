import React from 'react';
import './CaseTitle.css';

function CaseTitle({title, subtitle}) {
  return (
    <div className="case-title">
      <div className = "title">
        {title}
      </div>
      <div className = "subtitle">
        {subtitle}
      </div>
    </div>
  );
}

export default CaseTitle;
