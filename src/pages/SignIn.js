import React, { useContext } from 'react';
import Auth from "../components/Auth/SignInForm";
import { UidContext } from "../components/AppContext";

const SignIn = () => {
    const uid = useContext(UidContext);
    return (
        <div>
            {uid ? (
                <h1>Bienvenue dans votre fil d'actualité</h1>
            ) : (
               <Auth/> 
            )}
        </div>
    )
}

export default SignIn;
