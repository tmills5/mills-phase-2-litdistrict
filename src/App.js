import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';

import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
//import Form from "./Components/Form";
import Home from "./Components/Home";
import About from "./Components/About";
import Favorites from "./Components/Favorites";
import Contact from "./Components/Contact";

import Footer from "./Components/Footer";



function App() {



  return (
    <Router>
      <Header />
      <NavBar />
      

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/favorites' element={ <Favorites /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
      
      <Footer />
    </Router>
  )
}

export default App;


//  trying to create routes for /home /about and /contacts for starters