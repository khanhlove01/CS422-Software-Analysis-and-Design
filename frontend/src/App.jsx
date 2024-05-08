import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import Collection from './pages/collection';
import { NavBar, Footer } from './components/componentsindex';
import './styles/global.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
