import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import iconFacebook from "../img/icons/icon-facebook.svg";
import iconTwitter from "../img/icons/icon-twitter.svg";
import iconPinterest from "../img/icons/icon-pinterest.svg";
import iconInstagram from "../img/icons/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
    
      <div className="footerTop">
        <div >
          <Link to="/" className="footerLogo">
            Bookiner.dz
          </Link>
        </div>
        <div className="containerIcon">
          <img src={iconFacebook} alt="" className="icon" />
          <img src={iconInstagram} alt="" className="icon" />
          <img src={iconPinterest} alt="" className="icon" />
          <img src={iconTwitter} alt="" className="icon" />
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerListe">
          <ul>
            <li> <Link to="/apropos">A propos</Link></li>
            <li>Conditions d'utilisations</li>
            <li>Êtes-vous auteur ?</li>
          </ul>
        </div>
        <div className="footerRights">
          <p>2021 Bookiner.dz. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
