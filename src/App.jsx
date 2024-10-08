import React from 'react';
import {  Routes, Route } from "react-router-dom";
import HomeTwo from './pages/HomeTwo';
import Philosophy from './pages/Philosophy';
import Subscription from './pages/Subscription';
import Storage from './pages/Storage';

function App() {
  

  return (
    <Routes>
        <Route path="/" element={<HomeTwo/>} />
        <Route path="/philosophy" element={<Philosophy/>} />   
        <Route path="/subscription" element={<Subscription/>} />
        <Route path="/storage" element={<Storage/>} />
    </Routes>
  )
}

export default App
