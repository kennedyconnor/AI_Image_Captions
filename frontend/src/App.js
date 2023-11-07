import logo from './logo.svg';
import './styles/App.css';
import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CaptionPage from './pages/CaptionDisplay'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/caption-page" element={<CaptionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}
export default App;
