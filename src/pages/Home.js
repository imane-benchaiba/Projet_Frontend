import React  from "react";
import LeftNav from "../components/LeftNav";
import Thread from "../components/Thread";
import NewPost from "../components/Post/NewPost";

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
    </div>
  );
};

export default Home;
