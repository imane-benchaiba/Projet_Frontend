import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const SignInForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
    
        axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}api/user/login`,
          withCredentials: true,
          data: {
            email,
            password,
          },
        })
          .then((res) => {
            console.log(res);
            if (res.data.errors) {
              emailError.innerHTML = res.data.errors.email;
              passwordError.innerHTML = res.data.errors.password;
            } else {
              window.location = "/home";
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    const history = useHistory();
    const redirection = () => {
        const url = "/inscription";
        history.push(url);
    }
      
    return (  

        <div className="container__connexionForm">
            <div className="form__connexion" >
            <h2 className="bienvenue">Bienvenue</h2>
                <form onSubmit={handleLogin}>                   
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value) } value={email}/> 
                    <div className="email error"></div>
                               
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value) } value={password}/>
                    <div className="password error"></div>
                                
                    <button type="submit" class="submit" className="bouton__form">Se connecter</button>
                </form>
                <div className="form__connexionExt">
                    <h2>Nouveau ici?</h2>
                    <p>Inscrivez-vous et découvrez de nouvelles lectures!</p>
                    <button type="button" className="bouton__formExt" onClick={redirection}>S'inscrire</button>
                </div>
            </div>
        </div>

    )
}

export default SignInForm
