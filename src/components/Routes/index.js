import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Accueil from "../../pages/Accueil";
import Connexion from "../../pages/Connexion";
import Inscription from "../../pages/Inscription";

const index = () => {
    return (
        
            <Router>
              <div >
                <header>
                      <p className="logo">Bookiner.dz</p>
                      <nav >
                        <ul className="nav__links">                      
                          <li><Link to="/">Accueil</Link></li>      
                          <li><Link to="/connexion"><button className="button__connexion">Connexion</button></Link></li>                    
                          <li><Link to="/inscription"><button className="button__inscription">Inscription</button></Link></li>
                        </ul>
                      </nav>                                           
                </header>
                  <Switch>
                    <Route path="/connexion">
                      <Connexion />
                    </Route>
                    <Route path="/inscription">
                      <Inscription />
                    </Route>
                    <Route path="/">
                      <Accueil />
                    </Route>
                  </Switch>
                  </div>    
            </Router>
    )
}

export default index
