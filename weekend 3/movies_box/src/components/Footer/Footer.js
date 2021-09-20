import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &#169; 2021 copyright all right reserved{" "}
        <span className="highlight">Movies Box</span>
      </p>

      <div className="footer-right">
        <h4 className="footer-right__title">Privacy & Policy</h4>
          <p><NavLink to={"/terms"}>By using this site you agree to and accept our User Agreement, which can be read here.</NavLink></p>
      </div>
    </footer>
  );
};

export default Footer;
