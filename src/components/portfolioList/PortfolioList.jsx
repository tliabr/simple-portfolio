import React from 'react';
import "./portfolioList.css"
import Portfolio from '../portfolio/Portfolio';
import { products } from "../../data"

const PortfolioList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Portfolio</h1>
        <p className="pl-desc">
          These are some of the projects I've been working on:
        </p>
      </div>

      <div className="pl-list">
        {products.map((item) => (
          <Portfolio key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
