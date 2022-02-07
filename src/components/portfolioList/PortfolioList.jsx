import React from 'react';
import "./portfolioList.css"
import Portfolio from '../portfolio/Portfolio';
import { products } from "../../data"

const PortfolioList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create Title</h1>
        <p className="pl-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quod, sapiente ducimus iste odio atque earum? Ratione dolor animi consequatur id, alias ad minima illum dolore ipsam delectus sunt sint?
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
