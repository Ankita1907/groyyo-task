import React from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Routes ,Route } from 'react-router-dom';
import MainPage from "./Mainpage";
import Cart from "./Cart";

const App =() =>{
  return(
    <>
    <Routes>

      <Route path="/" element={<Navbar/>}/>
      <Route path="/View" element={<MainPage/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    
    
    </>
    
  )
}

export default App;