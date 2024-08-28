import React from 'react';
// STYLES
import './App.scss';
// COMPONENTS
import MainPage from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PolDePriv from './pages/PolDePriv';


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
