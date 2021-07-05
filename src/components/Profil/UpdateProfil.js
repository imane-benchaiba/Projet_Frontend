import React, { useState } from "react";
import LeftNav from "../LeftNav";
import { useSelector, useDispatch } from "react-redux";
import UploadPicture from "./UploadPicture";
import { updateBio } from "../../actions/user.actions";

const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const [followingPopup, setFollowingPopup] = useState(false);
  const [followersPopup, setFollowersPopup] = useState(false);

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };

  return (
    <div className="profil__container">
      
      <LeftNav />

      <div className="update__container">
      
        <div className="left__part">
        <h1> Profil de {userData.pseudo} </h1>
          <h2>Photo de profil</h2>
          <img src={userData.picture} alt="user_picture" />
          <UploadPicture />
        </div>
        <div className="right__part">
          <div className="bio_update">
            <h2>Bio</h2>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                <button
                  onClick={() => setUpdateForm(!updateForm)}
                  className="bouton__form"
                >
                  Modifier la bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate} className="bouton__form">
                  Valider modifications
                </button>
              </>
            )}
          </div>
          <div className="follow__container">
              <h5 >
                Abonnements : {userData.following ? userData.following.length : ""}
              </h5>
              <h5 >
                Abonnés : {userData.followers ? userData.followers.length : ""}
              </h5>
          </div>
        </div>
      </div>
      {followingPopup && (
        <div className="popupProfil__container">
          <div className="modal">
            <h3>Abonnements</h3>
            <span className="cross" onClick={() => setFollowingPopup(false)}>
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.following.length; i++) {
                  if (user._id === userData.following[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt="user-picture" />
                        <h4>{user.pseudo}</h4>

                      </li>
                    );
                  } 
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      )}
      {followersPopup && (
        <div className="popupProfil__container">
          <div className="modal">
            <h3>Abonnés</h3>
            <span className="cross" onClick={() => setFollowersPopup(false)}>
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.followers.length; i++) {
                  if (user._id === userData.followers[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt="user-picture" />
                        <h4>{user.pseudo}</h4>

                      </li>
                    );
                  }
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfil;
