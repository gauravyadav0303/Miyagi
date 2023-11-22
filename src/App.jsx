import React from 'react';
import {  Routes, Route } from "react-router-dom";
import HomeTwo from './pages/HomeTwo';
import Philosophy from './pages/Philosophy';

function App() {
  

  return (
    <Routes>
        <Route path="/" element={<HomeTwo/>} />
        <Route path="/philosophy" element={<Philosophy/>} />
    
    </Routes>
  )
}

export default App
