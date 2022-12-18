import React from 'react'
import './Moviedescription.css'
import { useNavigate, useLocation } from 'react-router-dom'
import Navigation from './Navigation';
import { useEffect,useState } from 'react';
import Loading from './Loading';
const Moviedescription = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [details, setDetails] = useState([])
    const [loading,setLoading]=useState(true)
    console.log(location.state)
    const id = location.state.id.slice(7, -1)
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f5a6505831msh047caca82de1460p1f887fjsn1dfbd2ab0027',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        };
        
        fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${id}&currentCountry=US`, options)
            .then(response => response.json())
            .then(response => setDetails(response))
            .then(response=>setLoading(false))
            .catch(err => console.error(err));
    }, [])
    console.log(details)
    
    // console.log(id)
  return (
      <div>
          <Navigation />
          {loading?<Loading/>:
          <div style={{ marginTop: "40px", marginLeft: "50px", marginRight: "50px" }}>
              <div className='descheader'>
                  <img src={location.state.image.url} alt={id} className="descimage" />
                  <div className='maindesc'>
                          <h2 className='desctitle'>{details.title.title}</h2>
                          <div className='genres'>{details.genres.map((genre) => <p className='moviegenre'>{genre}</p>)}</div>
                          <p className='moviegenre' style={{marginTop:"0",marginBottom:"0"}}>Duration: 1:50hrs</p>
                  </div>
                  </div>
              </div>
          }
    </div>
  )
}

export default Moviedescription
