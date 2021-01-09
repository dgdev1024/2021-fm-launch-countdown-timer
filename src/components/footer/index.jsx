/**
 * @file components/footer/index.jsx
 * @brief Displays the footer, with social media buttons.
 */

// Imports
import React from "react";
import IconFacebook from "../svg/icon-facebook";
import IconInstagram from "../svg/icon-instagram";
import IconPinterest from "../svg/icon-pinterest";
import "./index.scss";

/**
 * @component Footer
 * @brief Display social media buttons at the bottom of the page.
 */
const Footer = () => (
  <footer className="footer">
    <button
      className="footer__social-button footer__social-button--facebook"
      aria-label="Facebook"
      title="Facebook"
    >
      <IconFacebook className="footer__social-icon" />
    </button>
    <button
      className="footer__social-button footer__social-button--instagram"
      aria-label="Instagram"
      title="Instagram"
    >
      <IconInstagram className="footer__social-icon" />
    </button>
    <button
      className="footer__social-button footer__social-button--pinterest"
      aria-label="Pinterest"
      title="Pinterest"
    >
      <IconPinterest className="footer__social-icon" />
    </button>
  </footer>
);

// Export
export default Footer;
