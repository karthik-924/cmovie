import React from "react";
import { useState, useEffect } from "react";
import Moviecard from "./Moviecard";
import Navigation from "./Navigation";
import "./Mainpage.css";
import Loading from "./Loading";
const Mainpage = () => {
  const [Movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(1);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f5a6505831msh047caca82de1460p1f887fjsn1dfbd2ab0027",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(
      "https://imdb8.p.rapidapi.com/title/v2/find?title=game%20of&limit=20&paginationKey=1&sortArg=moviemeter%2Casc",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .then(setLoading(false))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <Navigation present="Home" />
      <div className="movieshow">
        {loading ? (
          <Loading/>
        ) : (
          Movies.slice(0, state * 9).map((movie) => (
            <Moviecard key={movie.id} details={movie} />
          ))
        )}
      </div>
      <div className="viewbutton">
        <button className="seemore" onClick={()=>setState(state+1)}>See more</button>
      </div>
    </div>
  );
};

export default Mainpage;
