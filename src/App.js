import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Mainpage from './components/Mainpage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/main' element={<Mainpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
