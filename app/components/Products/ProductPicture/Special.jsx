import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";

const Special = ({ text }) => {
  return (
    <div className="special-container">
      {text === "Best Choice" && <GoTrophy />}
      {text === "Best Value" && <IoDiamondOutline />}
      <p>{text}</p>
    </div>
  );
};

export default Special;
