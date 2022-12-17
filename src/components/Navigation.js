import React from "react";
import "./Navigation.css";
import { BsSearch } from 'react-icons/bs'
import {useState} from 'react'
const Navigation = () => {
    const [active,setActive]=useState(true)
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
                  <input type='text' placeholder="search" className="searchbar"/>
        </div>
        <div className="navbar">
          <button className="navbutton active">Home</button>
          <button className="navbutton">Language</button>
          <button className="navbutton">Genre</button>
                  <button className="navbutton">Account</button>
                  <BsSearch className="Search" onClick={()=>setActive(!active)}/>
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
