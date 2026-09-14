import React from "react";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">
          <h2>
            GREENORA<span>.</span>
          </h2>

          <p>
            Bringing a little more nature into everyday life with
            beautiful plants, helpful guidance, and thoughtful
            gardening essentials.
          </p>

          <div className="social-links">
            <a href="https://instagram.com/greenora" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <span>IG</span>
            </a>

            <a href="https://facebook.com/greenora" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <span>f</span>
            </a>

            <a href="https://twitter.com/greenora" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <span>𝕏</span>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3>Explore</h3>

          <a href="#home">Home</a>
          <a href="#plants">Plants</a>
          <a href="#categories">Categories</a>
          <a href="#care">Plant Care</a>
        </div>

        {/* Help */}
        <div className="footer-column">
          <h3>Help</h3>

          <a href="#finder">Plant Finder</a>
          <a href="#contact">Contact Us</a>
          <a href="#delivery">Delivery</a>
          <a href="#faq">FAQs</a>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact</h3>

          <p>
            <MapPin size={16} />
            Bangalore, Karnataka
          </p>

          <p>
            <Phone size={16} />
            +91 98765 43210
          </p>

          <p>
            <Mail size={16} />
            hello@greenora.in
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 Greenora Nursery. All rights reserved.
        </p>

        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;