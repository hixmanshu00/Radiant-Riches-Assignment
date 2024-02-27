import React from "react";
import { data } from "./data";
import Image from "next/image";
import product from "../../../public/assets/product.png";
import "../../styles/deals.scss";
const Deals = () => {
  return (
    <div className="deal-container">
      <h2 className="deals-head">Related deals you might like for</h2>
      <div className="cards-container">
        {data.map((Data) => (
          <div className="card-container" key={Data.id}>
            <div className="img-container">
              <Image src={product} alt="product" height={150} className="img" />
            </div>
            <div className="tags">
              <p>{Data.discount} Off</p>
              <p>Limited time</p>
            </div>
            <h4>{Data.name}</h4>
            <p>{Data.desc}</p>
            <div className="pricing">
              <span className="price">{Data.price}</span>
              <span className="original-price">{Data.originalPrice}</span>
              <span className="discount">({Data.discount})</span>
            </div>
            <button>View Deal</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
