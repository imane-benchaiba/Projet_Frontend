import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Accueil from "../../pages/Accueil";
import Connexion from "../../pages/Connexion";
import Inscription from "../../pages/Inscription";
import Home from "../../pages/Home";

const index = () => {
    return (
        <div>
             <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/accueil">Accueil</Link>
              </li>
              <li>
                <Link to="/connexion">Connexion</Link>
              </li>
              <li>
                <Link to="/inscription">Inscription</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/accueil">
              <Accueil />
            </Route>
            <Route path="/connexion">
              <Connexion />
            </Route>
            <Route path="/inscription">
              <Inscription />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
        </div>
    )
}

export default index
