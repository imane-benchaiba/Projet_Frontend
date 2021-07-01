import React from 'react'
import LeftNav from '../LeftNav';
import { useSelector } from "react-redux";
import UploadPicture from './UploadPicture';

const UpdateProfil = () => {
    const userData =  useSelector((state) => state.userReducer);
    return (
        <div className="profil__container">
            <LeftNav />
            
            <div className="update__container">
                <h1> Profil de {userData.pseudo} </h1>
                <div className="parts__container">
                    <div className="left__part">
                        <img src={userData.picture} alt="user_picture" />
                        <UploadPicture />
                    </div>
                    <div className="right__part">
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default UpdateProfil
