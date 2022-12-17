import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Mainpage from './components/Mainpage';
import './App.css';
import Language from './components/Language';
import Genre from './components/Genre';
import Account from './components/Account';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/main' element={<Mainpage />} />
        <Route path='/language' element={<Language />} />
        <Route path='/genre' element={<Genre />} />
        <Route path='/account' element={<Account/>}/>
      </Routes>
    </Router>
  );
}

export default App;
