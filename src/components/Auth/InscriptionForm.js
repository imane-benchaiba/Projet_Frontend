import React from 'react';
import Connexion from "../../pages/Connexion";

const InscriptionForm = () => {
    const transition = () => {
        return document.querySelector('.cont').classList.toggle('s--signup');
      }
    return (
        <div className="container__connexionForm">
            <div className="form__inscription">
                    <h2 className="bienvenue">Bienvenue</h2>
                    <label>
                        <span>Nom</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email" />
                    </label>
                    <label>
                        <span>Mot de passe</span>
                        <input type="password" />
                    </label>
                        <button type="button" class="submit" className="bouton__form">S'inscrire</button>
                    <div className="form__inscriptionExt">
                        <h2>Êtes-vous membre?</h2>
                        <p>Si vous avez déjà un compte, connectez-vous.</p>
                        <button type="button" className="bouton__formExt">Se connecter</button>   
                    </div>                  
            </div>
        </div>
    )
}

export default InscriptionForm
