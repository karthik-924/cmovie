import React from 'react'
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
const Mainpage = () => {
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
      .then(response => console.log(response))
      .catch(err => console.error(err));
  },[])
  return (
    <div>
      <Navigation/>
      <h1>Mainpage</h1>
    </div>
  )
}

export default Mainpage
