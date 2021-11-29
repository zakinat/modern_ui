import React from 'react';
import {Article} from '../../components/';
import {groupA,groupB} from './content'
const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={groupA.img} date={groupA.date} text={groupA.text} />
      </div>
      <div className="gpt3__blog-container_groupB">
        {groupB.map((item, index) => (
        <Article  imgUrl={item.img} date={item.date} text={item.text} key={index}/>
          ))}
      </div>
    </div>
  </div>
);

export default Blog;