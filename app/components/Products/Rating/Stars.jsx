import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Stars = ({ star }) => {
  let halfStar = false;
  let roundedStars = Math.round(star);
  let emptyStars = 5 - roundedStars;
  if (roundedStars - star > 0) {
    halfStar = true;
  }
  const stars = [];
  if (halfStar) {
    stars.push(<FaStarHalfAlt key={6} className="stars" />);
    roundedStars -= 1;
  }
  for (let i = 0; i < roundedStars; i++) {
    stars.push(<FaStar key={i} className="stars" />);
  }
  stars.reverse();
  while (emptyStars > 0) {
    emptyStars -= 1;
    stars.push(<CiStar key={emptyStars + roundedStars} />);
  }
  return <div>{stars}</div>;
};

export default Stars;
