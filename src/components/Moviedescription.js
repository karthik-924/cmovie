import React from "react";
import "./Moviedescription.css";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Moviesslider from "./Moviesslider";
const Moviedescription = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(location.state);
  const id = location.state.id.slice(7, -1);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "32c5b48d93msh7dd5b54cf75d18dp14e869jsncf707e2882d2",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(
      `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${id}&currentCountry=US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setDetails(response))
      .then((response) => setLoading(false))
      .catch((err) => console.error(err));
  }, [id]);
  console.log(details);
  // console.log(details)
  console.log(details.plotSummary);
  return (
    <div>
      <Navigation present="Home" />
      {loading ? (
        <Loading />
      ) : (
        <div className="description">
          <div className="descheader">
            <div>
              <img
                src={location.state.image.url}
                alt={id}
                className="descimage"
              />
            </div>
            <div className="maindesc">
              <h2 className="desctitle">{details.title.title}</h2>
              <div className="genres">
                {details.genres.map((genre) => (
                  <p className="moviegenre">{genre}</p>
                ))}
              </div>
              <p
                className="moviegenre"
                style={{ marginTop: "0", marginBottom: "0" }}
              >
                Duration: 1 : 50 hr
              </p>
              <div className="watchbuttons">
                <button className="watchbutton">Watch now</button>
                <button className="watchlater">Watch later</button>
              </div>
            </div>
          </div>
          <div className="movietext">
            {details.plotSummary !== undefined ? (
              details.plotOutline !== undefined ? (
                <div className="plotdesc">
                  <p>{details.plotOutline.text}</p>
                  <p>{details.plotSummary.text}</p>
                </div>
              ) : (
                <div className="plotdesc">
                  <p>{details.plotSummary.text}</p>
                </div>
              )
            ) : (
              <div className="plotdesc">
                <p>{details.plotOutline.text}</p>
              </div>
            )}
            {details.plotSummary !== undefined ? (
              details.plotOutline !== undefined ? (
                <div className="plotdesc">
                  <p>{details.plotOutline.text}</p>
                  <p>{details.plotSummary.text}</p>
                </div>
              ) : (
                <div className="plotdesc">
                  <p>{details.plotSummary.text}</p>
                </div>
              )
            ) : (
              <div className="plotdesc">
                <p>{details.plotOutline.text}</p>
              </div>
            )}
            {details.plotSummary !== undefined ? (
              details.plotOutline !== undefined ? (
                <div className="plotdesc">
                  <p>{details.plotOutline.text}</p>
                  <p>{details.plotSummary.text}</p>
                </div>
              ) : (
                <div className="plotdesc">
                  <p>{details.plotSummary.text}</p>
                </div>
              )
            ) : (
              <div className="plotdesc">
                <p>{details.plotOutline.text}</p>
              </div>
            )}
          </div>
          <Moviesslider genre={details.genres} />
        </div>
      )}
    </div>
  );
};

export default Moviedescription;
