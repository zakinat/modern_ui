import React from 'react';
import Feature from '../../components/feature/Feature';
import {featuresDataGroupA,featuresDataGroupB} from './content'
const WhatGPT3 = () => (
  <div className="whatgpt3 section__margin" id="wgpt3">
    <div className="whatgpt3__feature">
        <Feature title={featuresDataGroupA.title} text={featuresDataGroupA.text} />
    </div>
    <div className="whatgpt3__heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="whatgpt3__features-container">
      {featuresDataGroupB.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default WhatGPT3;