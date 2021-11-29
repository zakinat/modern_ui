import React from 'react';

const Feature = ({ title, text }) => (
  <div className="features__container-feature">
    <div className="features__container-feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="features__container-feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;