import React, { useState } from "react";
import LeftNav from "../LeftNav";
import { useSelector, useDispatch } from "react-redux";
import UploadPicture from "./UploadPicture";
import { updateBio } from "../../actions/user.actions";

const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

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
            <img src={userData.picture} alt="user_picture" />
            <UploadPicture />
          </div>
          <div className="right__part">
            <div className="bio_update">
              <h3>Bio</h3>
              {updateForm === false && (
                <>
                  <p onClick={() => setUpdateForm(!updateForm)}>
                    {userData.bio}
                  </p>
                  <button onClick={() => setUpdateForm(!updateForm)} className="bouton__form">
                    Modifier bio
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
                  <button onClick={handleUpdate} className="bouton__form">Valider modifications</button>
                </>
              )}
            </div>
          </div>
        </div>

    </div>
  );
};

export default UpdateProfil;
