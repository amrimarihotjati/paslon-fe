import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Paslon from './pages/Paslon';
import Partai from './pages/Partai';
import Kontak from './pages/Kontak';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path='paslon' element={<Paslon />} />
            <Route path='partai' element={<Partai />} />
            <Route path='kontak' element={<Kontak />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}