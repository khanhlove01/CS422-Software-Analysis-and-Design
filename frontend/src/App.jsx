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
import Account from './pages/account';
import UploadNFTPage from './pages/uploadNFTPage';
import ConnectWalletPage from './pages/connectWalletPage';
import ContactUsPage from './pages/contactUsPage';
import SignUpPage from './pages/signUpPage';
import AboutUsPage from './pages/aboutUsPage';
import SubscriptionPage from './pages/subscriptionPage';
import ForgetPasswordPage from './pages/forgetPasswordPage';
import ResetPasswordPage from './pages/resetPasswordPage';

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
        <Route path='/account' element={<Account/>} />
        <Route path='/upload-NFT' element={<UploadNFTPage/>} />
        <Route path='/connect-wallet' element={<ConnectWalletPage/>} />
        <Route path='/contact-us' element={<ContactUsPage/>} />
        <Route path='/sign-up' element={<SignUpPage/>} />
        <Route path='/about' element={<AboutUsPage/>} />
        <Route path='/subscription' element={<SubscriptionPage/>} />
        <Route path='/forget-password' element={<ForgetPasswordPage/>} />
        <Route path='/resetPassword/:id' element={<ResetPasswordPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
