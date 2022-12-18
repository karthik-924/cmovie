import React from "react";
import "./Navigation.css";
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Navigation = (present) => {
    // console.log(present)
    const navigate = useNavigate();
    const [active,setActive]=useState(false)
  return (
    <div>
      <div className="navigator">
        <div className="logo">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
              </div>
              <div className={active?"searchbardiv":"nonactive"}>
                  <input type='text' placeholder="Search" className="searchbar"/>
              </div>
              {/* <div className="dropdownbtn"> */}
              <div className="dropdownnavbar">
                  <button className="more">Menu</button>
        <div className="navbar">
                  <button className={present.present==="Home"?"navbutton active":"navbutton"} onClick={()=>navigate("/main")}>Home</button>
          <button className={present.present==="Language"?"navbutton active":"navbutton"} onClick={()=>navigate("/language")}>Language</button>
          <button className={present.present==="Genre"?"navbutton active":"navbutton"} onClick={()=>navigate("/genre")}>Genre</button>
                  <button className={present.present==="Account"?"navbutton active":"navbutton"} onClick={()=>navigate("/account")}>Account</button>
                  <BsSearch className="Search" onClick={()=>setActive(!active)}/>
                  </div>
                  </div>
      </div>
      <div className="lines">
        <hr className="indilines" />
        <hr className="indilines" />
      </div>
    </div>
  );
};

export default Navigation;
