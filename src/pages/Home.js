import React  from "react";
import LeftNav from "../components/LeftNav";
import Thread from "../components/Thread";
import NewPost from "../components/Post/NewPost";
import FriendsHint from "../components/Profil/FriendsHint";
import BooksHint from "../components/Book/BooksHint";

const Home = () => {
  return (
    <div className="home-container">
      <LeftNav />
      <div className="main">
        <div className="home-header">
        <NewPost />
        </div>
        <Thread />
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            <FriendsHint />    
            <BooksHint />      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
