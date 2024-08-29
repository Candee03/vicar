import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// STYLES
import './App.scss';
// PAGES
import MainPage from './pages/MainPage';
import PolDePriv from './pages/PolDePriv';
import Error from './pages/Error';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/politica_de_privacidad' element={<PolDePriv/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
