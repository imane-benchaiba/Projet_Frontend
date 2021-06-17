import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Accueil from "../../pages/Accueil";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

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
                      <SignIn />
                    </Route>
                    <Route path="/inscription">
                      <SignUp />
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
