import React from 'react';


const ConnexionForm = () => {

      const transition = () => {
        return document.querySelector('.cont').classList.toggle('s--signup');
      }
      
    return (  

        <div className="container__connexionForm">
            <div className="form__connexion">
                <h2 className="bienvenue">Bienvenue</h2>
                <label>
                    <span>Email</span>
                    <input type="email" />
                </label>
                <label>
                    <span>Mot de passe</span>
                    <input type="password" />
                </label>
                <p className="forgot-pass">Mot de passe oublié?</p>
                <button type="button" class="submit" className="bouton__form">Se connecter</button>
                <div className="form__connexionExt">
                    <h2>Nouveau ici?</h2>
                    <p>Inscrivez-vous et découvrez de nouvelles lectures!</p>
                    <button type="button" className="bouton__formExt">S'inscrire</button>
                </div>
            </div>
        </div>

    )
}

export default ConnexionForm
