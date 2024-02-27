import React from "react";
import Image from "next/image";

const Picture = ({ number, image, name }) => {
  return (
    <div className="picture-container">
      <div className="number">{number}</div>
      <div className="image">
        <Image src={image} alt="product" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Picture;
