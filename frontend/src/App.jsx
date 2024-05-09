import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import Collection from './pages/collection';
import { NavBar, Footer } from './components/componentsindex';
import './styles/global.css';
import Author from './pages/author';
import SearchPage from "./pages/searchPage"
import LoginPage from './pages/loginPage';
import NFTDetails from './pages/nftDetails';

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
        <Route path='/NFT-details' element={<NFTDetails/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
