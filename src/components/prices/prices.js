import React from "react";
import "./Prices.css";

const Prices = () => {
  return (
    <div className="flyer-container">
      <div className="header-section">
        <h1>Moshe Schwartzberg</h1>
        <p>Affordable, High-Quality Website Solutions</p>
        <p>For Small Businesses, Creatives, and Professionals</p>
      </div>

      <div className="section-title">Website Development Pricing</div>
      <div className="pricing-section">
        <div className="pricing-tier">
          <h3>Landing Page</h3>
          <p className="price">3,000₪</p>
          <ul>
            <li>Single landing page</li>
            <li>SEO optimization</li>
            <li>Responsive design</li>
            <li>2 revision included</li>
          </ul>
        </div>
        <div className="pricing-tier">
          <h3>Additional Pages</h3>
          <p className="price">500₪/page</p>
          <ul>
            <li>Extend your site</li>
            <li>Consistent styling</li>
            <li>SEO per page</li>
            <li>Fast delivery</li>
          </ul>
        </div>
        <div className="pricing-tier">
          <h3>Custom Systems</h3>
          <p className="price">Get a Quote</p>
          <ul>
            <li>CRM/CMS integration</li>
            <li>Shopify, Monday.com</li>
            <li>Custom features</li>
            <li>Tailored solutions</li>
          </ul>
        </div>
      </div>

      <div className="section-title">Maintenance Plans</div>
      <div className="maintenance-section">
        <div className="maintenance-tier">
          <h3>Basic Tier</h3>
          <p className="price">500₪/mo</p>
          <ul>
            <li>Server maintenance</li>
            <li>Security updates</li>
            <li>Basic support</li>
          </ul>
        </div>
        <div className="maintenance-tier">
          <h3>Mid Tier</h3>
          <p className="price">700₪/mo</p>
          <ul>
            <li>Server maintenance</li>
            <li>3 hours design updates</li>
            <li>Content updates</li>
          </ul>
        </div>
        <div className="maintenance-tier">
          <h3>High Tier</h3>
          <p className="price">1,200₪/mo</p>
          <ul>
            <li>Server maintenance</li>
            <li>10 hours design updates</li>
            <li>Frequent updates</li>
          </ul>
        </div>
      </div>

      <div className="additional-maintenance-notes">
        <p>
          <strong>*</strong> If the cosmetics maintenance hour cap is over,
          there will be an hourly charge with a 33% discount. Normal price is
          300₪/hour.
        </p>
        <p>
          <strong>*</strong> If the client prefers not to subscribe monthly,
          there is an option for ad-hoc maintenance at 300₪/hour.
        </p>
      </div>

      <div className="additional-services-section">
        <h3>More Services</h3>
        <p>
          Advanced SEO, Branding, Analytics, E-commerce Setup, General Tech
          Support
        </p>
      </div>

      <div className="cta-section">
        <p>Launch Your Website Today!</p>
        <p>Email: mosheschwartzberg@gmail.com | Phone: 0587076077</p>
        <p>Visit: mosheschwartzberg.com</p>
      </div>

      <div className="footer-section">
        <p>Sites for Everyone © 2025</p>
      </div>
    </div>
  );
};

export default Prices;
