import React from 'react';
// STYLES
import './App.scss';
// COMPONENTS
import MainPage from './pages/MainPage.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PolDePriv from './pages/PolDePriv.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/politica_de_privacidad' element={<PolDePriv/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
