import React from 'react';
import Image1 from "../img/cheremamie.jpg";
import Image2 from "../img/sharko.jpg";
import Image3 from "../img/puzzle.jpg";


const Accueil = () => {

    return (
        <div className="accueil__container">
            <div >
                <p className="slogan">Trouvez votre prochaine lecture</p>
            </div>
            
            <div className="search__container">
               <input className="search__input" type="text" placeholder="Chercher un livre, un auteur..."></input>
            </div>
            <div className="third__container">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#a40000" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>

                <div className="list__container">
                    <img src={Image1} className="image__roman" alt="roman"/>
                    <img src={Image2} className="image__roman" alt="roman"/>
                    <img src={Image3} className="image__roman" alt="roman"/>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45" fill="#a40000" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>

            </div>
           
        </div>
    )
}

export default Accueil
