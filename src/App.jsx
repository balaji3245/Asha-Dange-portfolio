import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainSite from './pages/MainSite';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
