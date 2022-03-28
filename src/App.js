import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';

import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Favorites from "./Components/Favorites";
import Footer from "./Components/Footer";



function App() {
  

  return (
    <>

      <Router>
        <Header />

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/favorites' element={ <Favorites /> } />
        </Routes>
        
      </Router>

      <Footer />
    </>
  )
}

export default App;