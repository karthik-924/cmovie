import React from "react";
import "./Moviecard.css";
import { useNavigate } from "react-router-dom";
import Def from "../images/Def.jpg"
const Moviecard = ({ details }) => {
    // const location = useLocation();
    const navigate = useNavigate();
  const { id, image, title } = details;
  console.log(id)
  return (
    <div className="moviecontainer">
      <img src={image?.url||Def} alt={title} className="movieimage"></img>
      <h3 className="movietitle">{title}</h3>
          <button className="play" onClick={() => navigate(`/movie/${title}`, { state: { id: id,image:image||Def}})}>Play now</button>
    </div>
  );
};

export default Moviecard;
