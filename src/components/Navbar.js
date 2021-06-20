import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <p className="logo">Bookiner.dz</p>
            <nav>
                <ul className="nav__links">                      
                    <li><Link to="/">Accueil</Link></li>      
                    <li><Link to="/connexion"><button className="button__connexion">Connexion</button></Link></li>                    
                    <li><Link to="/inscription"><button className="button__inscription">Inscription</button></Link></li>
                </ul>
            </nav>                                           
        </div>
    )
}

export default Navbar
