import React from 'react';
import "./portfolio.css"

const Portfolio = ({img, link}) => {
  return (
    <div className="card">
      <div className="browser">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Portfolio;
