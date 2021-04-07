import React from "react";
import NavBar from "./NavBar";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
function Dashboard() {
  
  return (
    <div>
      <NavBar /> 
    </div>
  );
}


export default Dashboard;
