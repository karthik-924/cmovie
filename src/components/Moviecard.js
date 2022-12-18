import React from "react";
import "./Moviecard.css";
const Moviecard = ({ details }) => {
  const { image, title } = details;
  return (
    <div className="moviecontainer">
      <img src={image.url} alt={title} className="movieimage"></img>
      <h3 className="movietitle">{title}</h3>
      <button className="play">Play now</button>
    </div>
  );
};

export default Moviecard;
