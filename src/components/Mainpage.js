import React from 'react'
import { useState, useEffect } from 'react';
import Moviecard from './Moviecard';
import Navigation from './Navigation';
import './Mainpage.css'
const Mainpage = () => {
  const [Movies,setMovies]=useState([])
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '12a108f7e9msh1e14d34321d89f3p19fab6jsn354eec8a612d',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };
    
    fetch('https://imdb8.p.rapidapi.com/title/v2/find?title=game%20of&limit=20&paginationKey=1&sortArg=moviemeter%2Casc', options)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  },[])
  return (
    <div>
      <Navigation present="Home"/>
      <div className='movieshow'>
        {Movies.map((movie) => <Moviecard key={movie.id} details={movie}/>)}
      </div>
    </div>
  )
}

export default Mainpage
