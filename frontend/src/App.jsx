import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import Collection from './pages/collection';
import { NavBar, Footer } from './components/componentsindex';
import './styles/global.css';
import Author from './pages/author';
import SearchPage from "./pages/searchPage"
import LoginPage from './pages/loginPage';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/author' element={<Author/>} />
        <Route path='/search-page' element={<SearchPage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
