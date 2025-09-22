import React from 'react';
import './AnimatedTitle.css';

const AnimatedTitle: React.FC = () => {
  return (
    <div className="animated-title">
      <div className="title-line line-1">Es beginnt</div>
      <div className="title-line line-2">mit einer</div>
      <div className="title-line line-3">Überschrift</div>
    </div>
  );
};

export default AnimatedTitle;
