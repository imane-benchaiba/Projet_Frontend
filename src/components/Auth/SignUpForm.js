import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import SignInForm from "./SignInForm";
import axios from 'axios';

const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleRegister = async (e) => {
        e.preventDefault();
        const pseudoError = document.querySelector(".pseudo.error");
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
    
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/register`,
            data: {
              pseudo,
              email,
              password,
            },
        })
            .then((res) => {
              console.log(res);
              if (res.data.errors) {
                pseudoError.innerHTML = res.data.errors.pseudo;
                emailError.innerHTML = res.data.errors.email;
                passwordError.innerHTML = res.data.errors.password;
              } else {
                setFormSubmit(true);
              }
            })
            .catch((err) => console.log(err));
        }
    const history = useHistory();
    const redirection = () => {
        const url = "/connexion";
        history.push(url);
    }
    return (
        <>
        {formSubmit ? (
            <>
            <h4 className="bienvenue">
                Enregistrement réussi, veuillez-vous connecter !
              </h4>
              <SignInForm />
              
            </>
          ) : (
        <div className="container__connexionForm">
            <div className="form__inscription">
                <h2 className="bienvenue">Bienvenue</h2>
                <form onSubmit={handleRegister}> 
                    <label htmlFor="pseudo">Pseudo</label>
                    <input type="text" name="pseudo" id="pseudo" onChange={(e) => setPseudo(e.target.value) } value={pseudo}/>
                    <div className="pseudo error"></div>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value) } value={email}/>
                    <div className="email error"></div>
                    
                    <label htmlFor="password" >Mot de passe</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value) } value={password}/>
                    <div className="password error"></div>
                    
                    <button type="submit" class="submit" className="bouton__form">S'inscrire</button>
                </form>    
                    <div className="form__inscriptionExt">
                        <h2>Êtes-vous membre?</h2>
                        <p>Si vous avez déjà un compte, connectez-vous.</p>
                        <button type="button" className="bouton__formExt" onClick={redirection}>Se connecter</button>   
                    </div>                  
            </div>
        </div>
    ) };
    </>
); }

export default SignUpForm;
