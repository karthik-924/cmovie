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
        "X-RapidAPI-Key": "32c5b48d93msh7dd5b54cf75d18dp14e869jsncf707e2882d2",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(
      "https://imdb8.p.rapidapi.com/title/v2/find?title=a&titleType=movie&limit=20&paginationKey=1&sortArg=moviemeter%2Casc",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .then((response)=>setLoading(false))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {console.log(Movies)}
      <Navigation present="Home" />
      {loading ? <Loading />:<div className="movieshow">{Movies.slice(0, state * 9).map((movie) => (<Moviecard key={movie.id} details={movie} />))}</div>}
      {loading ? "" :
        <div className="viewbutton">
          <button className="seemore" onClick={() => setState(state + 1)}>
            See more
          </button>
        </div>
      }
    </div>

  );
};

export default Mainpage;
