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
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Support</li>
          <li>Contact us</li>
          <li>Open Positions</li>
        </ul>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <p>© {Year.getFullYear()} Sites for Everyone, all rights reserved. </p>
    </div>
  );
}
