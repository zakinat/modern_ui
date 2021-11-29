import React from 'react';
import {Article} from '../../components/';
import {groupA,groupB} from './content'
const Blog = () => (
  <div className="blog section__padding" id="blog">
    <div className="blog__heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="blog__container">
      <div className="blog__container-groupA">
        <Article imgUrl={groupA.img} date={groupA.date} text={groupA.text} />
      </div>
      <div className="blog__container-groupB">
        {groupB.map((item, index) => (
        <Article  imgUrl={item.img} date={item.date} text={item.text} key={index}/>
          ))}
      </div>
    </div>
  </div>
);

export default Blog;