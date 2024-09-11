import React from "react";
import Reactlogo from "./assets/react.svg"
import './index.css';


function NavBar(){
  return(
    <div className="nav">
    
    <img src={Reactlogo} alt="React-logo" />
    <h1>REACTFACTS</h1>
    <div className="flex--end">
    <p>REACT COURSE - PROJECT 1</p>
    </div>

    </div>
  )
}

export default NavBar