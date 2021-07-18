import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FriendPopup = ({ posterId }) => {
  const usersData = useSelector((state) => state.usersReducer);
  return (
      <ul>
        {usersData.map((user) => {
          if (posterId === user._id) {
            return (
              <li key={user._id}>
                <div className="friend-pic">
                  <img src={user.picture} alt="user-pic" />
                </div>
                <div>
                  <h3>{user.pseudo}</h3>
                  <h4>A lu {user.read.length} livres</h4>
                  <br />
                  <h4>Bio :</h4>
                  <h5 className="friend-bio">{user.bio}</h5>
                </div>
              </li>
            );
          }
        return null;
        })}
      </ul>
  );
};
export default FriendPopup;
