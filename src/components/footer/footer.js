import "./footer.css";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const Year = new Date();

  return (
    <div className="footerContainer">
      <div className="footerDiv">
        <div>
          <h3 className="footerH3">Sites for Everyone</h3>
          <ul>
            <li>Sites for Everyone</li>
            <li>Tartzav 12</li>
            <li>Holon Israel</li>
            <li className="socialsLi footerSubMenu">
              <a href="https://www.instagram.com/moshe_blackberg/">
                <FaInstagram size={40} />
              </a>
              <a href="https://www.linkedin.com/in/moshe-schwartzberg-ab54401a7/">
                <FaLinkedin size={40} />
              </a>
              <a href="https://x.com/MosheBlackberg">
                <FaTwitter size={40} />
              </a>
            </li>
          </ul>
        </div>
        <ul className="footerSubMenu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/service">Services</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <ul className="footerSubMenu">
          <li>
            <a href="/contact">Support</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
          <li>
            <a href="/contact">Open Positions</a>
          </li>
        </ul>
        <ul className="footerSubMenu">
          <li>
            <a href="/terms">Terms and Conditions</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <p>© {Year.getFullYear()} Sites for Everyone, all rights reserved. </p>
    </div>
  );
}
