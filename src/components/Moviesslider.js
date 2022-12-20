import React from "react";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Moviecard from "./Moviecard";
import "./Movieslider.css";
const Moviesslider = ({ genre }) => {
  // const genr = genre.genre
  // console.log(genre)
  // genre = genre.map((indi) => indi.toLowerCase+"%2C")
  // genre=genre.join()
  // const storegenre=genre
  const genredummy = genre
    .slice(0, -1)
    .map((indi) => indi.toLowerCase() + "%2C");
  genredummy.push(genre[genre.length - 1].toLowerCase());
  genre = genredummy.join("");
  console.log(genre);
  const url = `https://imdb8.p.rapidapi.com/title/v2/find?title=game%20of&limit=4&sortArg=moviemeter%2Casc&genre=${genre}`;
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(url);
  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ffa1aca1aamshb302b05cd644d80p13a733jsn5d022d3d43f6",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(`${url}`, options)
      .then((response) => response.json())
      .then((response) => setSimilar(response.results))
      .then((response) => console.log(response))
      .then((response) => setLoading(false))
      .catch((err) => console.error(err));
  }, [genre]);
  return (
    <div className="similardiv">
      <h3 className="showsheading">Similar Movies</h3>
      {loading ? (
        <Loading />
      ) : similar != undefined ? (
        <div className="similarmovies">
          {similar.map((movie) => (
            <Moviecard key={movie.id} details={movie} />
          ))}
        </div>
      ) : (
        <div className="similarmovies">
          <h2>No matches found</h2>
        </div>
      )}
    </div>
  );
};

export default Moviesslider;
