import React, { useContext } from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Auth/Logout";

const Navbar = () => {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);

  return (
        <div className="navbar">
            <p className="logo">Bookiner.dz</p>
            {uid ? (
            <div className="nav__ext">
                <p>Bienvenue {userData.pseudo}</p>
                <Logout />
            </div>
            ) : (
            <nav>
                <ul className="nav__links">                      
                    <li><Link to="/">Accueil</Link></li>      
                    <li><Link to="/connexion"><button className="button__connexion">Connexion</button></Link></li>                    
                    <li><Link to="/inscription"><button className="button__inscription">Inscription</button></Link></li>
                </ul>
            </nav>  
            )}                                         
        </div>
    )
}

export default Navbar
