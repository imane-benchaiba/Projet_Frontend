import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import icon from "../../img/icons/logout.svg";

const Logout = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
    
    window.location = "/";
  };

  return (
    <div onClick={logout}>
      <img src={icon} alt="logout" className="iconLogout" />
    </div>
  );
};

export default Logout;

