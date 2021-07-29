import React, { useState, useEffect } from "react";
import LeftNav from "../LeftNav";
import { useSelector, useDispatch } from "react-redux";
import UploadPicture from "./UploadPicture";
import { updateBio } from "../../actions/user.actions";
import FollowHandler from "./FollowHandler";
import { isEmpty } from "../../components/Utils";
import AuthorPopup from "../Book/AuthorPopup";

const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const bookData = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const [followingPopup, setFollowingPopup] = useState(false);
  const [followersPopup, setFollowersPopup] = useState(false);
  const [booksList, setBooksList] = useState([]);
  const [authorPopup, setAuthorPopup] = useState(false);

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };

  useEffect(() => {
    const bookList = () => {
      let array = [];
      bookData.map((book) => {
        if (book.read.includes(userData._id)) return array.push(book._id);
      });
      /*array.sort(() => 0.5 - Math.random());
      if (window.innerHeight > 780) {
        array.length = 6;
      } else if (window.innerHeight > 720) {
        array.length = 5;
      } else if (window.innerHeight > 615) {
        array.length = 4;
      } else if (window.innerHeight > 540) {
        array.length = 4;
      } else {
        array.length = 0;
      }*/
      setBooksList(array);
    };
    if (!isEmpty(bookData[0]) && !isEmpty(userData._id)) {
      bookList();
    }
  }, [bookData, userData]);

  return (
    <div className="profil-container">
      <LeftNav />
      <div className="update-container">
        <h1> Profil de {userData.pseudo} </h1>
        <div className="updateParts-container">
          <div className="top-part">
            <h2>Photo de profil</h2>
            <div className="pic-part">
              <img src={userData.picture} alt="user_picture" />
              <UploadPicture />
            </div>
            <div className="bottom-part">
              <div className="bio-update">
                <h2>Bio</h2>
                {updateForm === false && (
                  <>
                    <p onClick={() => setUpdateForm(!updateForm)}>
                      {userData.bio}
                    </p>
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
              <div className="follow-container">
                <h5 onClick={() => setFollowingPopup(true)}>
                  Abonnements :{" "}
                  {userData.following ? userData.following.length : ""}
                </h5>
                <h5 onClick={() => setFollowersPopup(true)}>
                  Abonnés :{" "}
                  {userData.followers ? userData.followers.length : ""}
                </h5>
              </div>
            </div>
          </div>
          <div className="biblio-container">
            <h2>Bibliothèque</h2>
            <ul>
              {booksList &&
                booksList.map((book) => {
                  for (let i = 0; i < bookData.length; i++) {
                    if (book === bookData[i]._id) {
                      return (
                        <li className="book-hint" key={book}>
                          <img src={bookData[i].picture} alt="user-pic" />
                          <div className="book-infos">
                            <p
                              className="author-name"
                              onClick={() => setAuthorPopup(true)}
                            >
                              {bookData[i].author}
                            </p>
                            <p className="book-name">{bookData[i].bookName}</p>
                            {/**authorPopup && (
                            <div className="popup-author-container">
                              <div className="modal">
                                <span
                                  className="cross"
                                  onClick={() => setAuthorPopup(false)}
                                >
                                  &#10005;
                                </span>
                                <AuthorPopup book={bookData[i]} />
                              </div>
                            </div>
                            )*/}
                          </div>

                          
                        </li>
                      );
                    }
                  }
                })}
                {isEmpty(booksList) && (
                  <h5>Votre bibliothèque est vide.</h5>
                )

                }
            </ul>
          </div>
        </div>
      </div>

      {followingPopup && (
        <div className="popup-profil-container">
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
                        <img src={user.picture} alt="user-pic" />
                        <h4>{user.pseudo}</h4>
                        <div className="follow-handler">
                          <FollowHandler
                            idToFollow={user._id}
                            type={"suggestion"}
                          />
                        </div>
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
        <div className="popup-profil-container">
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
                        <img src={user.picture} alt="user-pic" />
                        <h4>{user.pseudo}</h4>
                        <div className="follow-handler">
                          <FollowHandler
                            idToFollow={user._id}
                            type={"suggestion"}
                          />
                        </div>
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
