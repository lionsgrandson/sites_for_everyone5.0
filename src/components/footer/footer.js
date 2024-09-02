// Footer.jsx
import React from "react";
import "./footer.css";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const Year = new Date().getFullYear();

  return (
    <footer className="footerContainer">
      <div className="footerDiv">
        <div className="footerSection">
          <h3 className="footerH3">Sites for Everyone</h3>
          <ul>
            <li>Sites for Everyone</li>
            <li>Tartzav 12</li>
            <li>Holon Israel</li>
            <li className="socialsLi">
              <a
                href="https://www.instagram.com/moshe_blackberg/"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/moshe-schwartzberg-ab54401a7/"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/MosheBlackberg"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h3 className="footerH3">Navigation</h3>
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
        </div>
        <div className="footerSection">
          <h3 className="footerH3">Support</h3>
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
        </div>
        <div className="footerSection">
          <h3 className="footerH3">Legal</h3>
          <ul className="footerSubMenu">
            <li>
              <a href="/terms">Terms and Conditions</a>
            </li>
            <li>
              <a href="/privacylol">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        © {Year} Sites for Everyone, all rights reserved.
      </p>
    </footer>
  );
}
