import React from "react";
import "../../styles/newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <p>Sign up and get exclusive special deals</p>
      <div className="email-inp">
        <input type="email" name="email" id="email" />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Newsletter;
