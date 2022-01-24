import React from "react";
import { useLocation } from "react-router-dom";

const HomeScreen = () => {
  
  let location = useLocation();

  return (
    <div>
      <br />
      <h1>Welcome {location.state.username} </h1>
      
    </div>
  );
};

export default HomeScreen;
