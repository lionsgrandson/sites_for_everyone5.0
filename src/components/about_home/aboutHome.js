import "./aboutHome.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutHome() {
  return (
    <div className="home-about-div">
      <div className="home-about-innder-div">
        <h1 className="home-about-h1">
          Hi, I’m Moshe, CEO of Sites for Everyone
        </h1>
        <p className="home-about-p">
          Running a business is hard enough... let us help you take the load
          off. Our team of experiences developers, designers and Dev-Ops
          engineers is always ready to provide our client with the most
          sophisticated final product and the guidance throughout the building
          process.
        </p>
        <button className="home-about-btn">
          Read More <FaArrowRightLong />
        </button>
      </div>
      <img
        src=""
        alt="image of the CEO of the company - Moshe"
      />
    </div>
  );
}
