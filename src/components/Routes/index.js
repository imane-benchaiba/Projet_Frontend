import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Accueil from "../../pages/Accueil";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Profil from "../../pages/Profil";
import Home from "../../pages/Home";
import BooksThread from "../../pages/BooksThread";
import Navbar from "../Navbar";
import Footer from "../Footer";
import About from "../../pages/About";

const index = () => {
  return (
    <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/connexion">
              <SignIn />
            </Route>
            <Route path="/inscription">
              <SignUp />
            </Route>
            <Route path="/profil">
              <Profil />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/booksthread">
              <BooksThread />
            </Route>
            <Route path="/apropos">
              <About />
            </Route>
            <Route path="/">
              <Accueil />
            </Route>
          </Switch>
        </Router>
      <Router>
        <Footer />
      </Router>
    </>
  );
};

export default index;
