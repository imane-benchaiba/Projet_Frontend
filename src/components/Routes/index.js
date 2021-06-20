import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Accueil from "../../pages/Accueil";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Navbar from '../Navbar';

const index = () => {
    return (        
      <Router>
        <Navbar />
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
      </Router>
    )
}

export default index
