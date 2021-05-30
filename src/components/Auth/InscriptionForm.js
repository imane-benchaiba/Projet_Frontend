import React from 'react'

const InscriptionForm = () => {
    const transition = () => {
        return document.querySelector('.cont').classList.toggle('s--signup');
      }
    return (
        <div className="cont">
            <div className="form sign-in">
                    <h2>Time to feel like home,</h2>
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
                        <button type="button" class="submit">S'inscrire</button>
            </div>

            <div className="sub-cont">
                <div className="img">
                    <div className="img__text m--up">
                        <h2>Êtes-vous membre?</h2>
                        <p>Si vous avez déjà un compte, connectez-vous. Vous nous avez manqué!</p>
                    </div>
                    <div className="img__text m--in">
                        <h2>Nouveau membre?</h2>
                        <p>Inscrivez-vous et découvrez de nouvelles lectures!</p>
                    </div>
                    
                    <div className="img__btn" onClick={transition}>
                        <span className="m--up" >Se connecter</span>
                        <span className="m--in" >S'inscrire</span>
                        
                    </div>
                </div>
                <div className="form sign-up">
                <h2>Bienvenue</h2>
                <label>
                    <span>Email</span>
                    <input type="email" />
                </label>
                <label>
                    <span>Mot de passe</span>
                    <input type="password" />
                </label>
                <p className="forgot-pass">Mot de passe oublié?</p>
                <button type="button" class="submit">Se connecter</button>
            </div>
            </div>
        </div>
    )
}

export default InscriptionForm
