import Routes from "./components/Routes";
import React, { useEffect, useState } from "react";
import { UidContext } from "./components/AppContext";
import axios from "axios";


function App() {
  const [uid, setUid] = useState(null);
  useEffect( () => {
    const fetchToken = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}jwtid`
    })
     .then((res) => {
       console.log(res);
      setUid(res.data)})
     .catch((err) => console.log("No token"));
  };
  fetchToken();
  }, [uid]);
  return (
    <div className="app">
      <UidContext.Provider value={uid} >
        <Routes />
      </UidContext.Provider>
    </div>
    
  );
}

export default App;
