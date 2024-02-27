import React from "react";
import Stars from "./Stars";
import { IoInformationCircleOutline } from "react-icons/io5";

const Rating = ({ rating, comment, stars }) => {
  return (
    <div className="rating-container">
      <IoInformationCircleOutline className="info" />
      <h2>{rating}</h2>
      <h4>{comment}</h4>
      <Stars star={stars} />
    </div>
  );
};

export default Rating;
