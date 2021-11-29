import React from 'react';
import Feature from '../../components/feature/Feature';

import {featuresData} from './content'

const Features = () => (
  <div className="features section__padding" id="features">
    <div className="features__heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="features__container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;