import "./footer.css";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const Year = new Date();

  return (
    <div className="footerConaintere">
      <div className="fooerDiv">
        <div>
          <h3 className="footerH3">Sites for Everyone</h3>
          <ul>
            <li>Sites for Everyone</li>
            <li>Tartzav 12</li>
            <li>Holon Israel</li>
            <li className="socialsLi">
              <FaInstagram size={40} />
              <FaLinkedin size={40} />
              <FaTwitter size={40} />
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
            {/* TODO add a title to the message with this header (support or contact or open) */}
            <a href="/contact">Open Positions</a>
          </li>
        </ul>
        <ul className="footerSubMenu">
          <li>
            <a href="/Terms"> Terms and Conditions</a>
          </li>
          <li>
            <a href="/privacyLOL">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <p>© {Year.getFullYear()} Sites for Everyone, all rights reserved. </p>
    </div>
  );
}
