// ThankYou.jsx
import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import Btn from "../components/btn/btn";
import "./ThankYou.css";

export default function ThankYou() {
  return (
    <div className="thankYouContainer">
      <Menu />
      <div className="thankYouContent">
        <h1 className="thankYouTitle">Thank You!</h1>
        <p className="thankYouMessage">
          Your message has been sent successfully.
        </p>
        <Link to="/contact">
          <Btn bntTxt="Go Back" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
