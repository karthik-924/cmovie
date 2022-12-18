import React from "react";
import "./Moviecard.css";
import { useNavigate,useLocation } from "react-router-dom";
const Moviecard = ({ details }) => {
    const location = useLocation();
    const navigate = useNavigate();
  const { id,image, title } = details;
  return (
    <div className="moviecontainer">
      <img src={image.url} alt={title} className="movieimage"></img>
      <h3 className="movietitle">{title}</h3>
          <button className="play" onClick={() => navigate(`/movie/${title}`, { state: { id: id,image:image}})}>Play now</button>
    </div>
  );
};

export default Moviecard;
