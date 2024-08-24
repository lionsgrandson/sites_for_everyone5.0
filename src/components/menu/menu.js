import "./menu.css";
import ILflagImg from "../../img/IlFlagIcon.png";
export default function Menu() {
  return (
    <div className="menu-div">
      <h1 className="menu_header">
        S<span>fE</span>
      </h1>
      <ul className="menu-list">
        <li>
          <a href="./about">About</a>
        </li>
        <li>
          <a href="./service">Services</a>
        </li>
        <li>
          <a href="./portfolio">Portfolio</a>
        </li>
        <li>
          <a href="./blog">Blog</a>
        </li>
        <li>
          <a href="./contact">Contact</a>
        </li>
      </ul>
      <button className="CalltoActionNav">
        <a>Get Started</a>
      </button>
      <img src={ILflagImg} className="ilFlagNav" alt="Israeli Flag Icon"/>
    </div>
  );
}
