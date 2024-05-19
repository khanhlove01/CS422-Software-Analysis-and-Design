import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./pages";
import Collection from "./pages/collection";
import { NavBar, Footer } from "./components/componentsindex";
import "./styles/global.css";
import Author from "./pages/author";
import SearchPage from "./pages/searchPage";
import LoginPage from "./pages/loginPage";
import NFTDetails from "./pages/nftDetails";
import Account from "./pages/account";
import UploadNFTPage from "./pages/uploadNFTPage";
import ConnectWalletPage from "./pages/connectWalletPage";
import ContactUsPage from "./pages/contactUsPage";
import SignUpPage from "./pages/signUpPage";
import AboutUsPage from "./pages/aboutUsPage";
import SubscriptionPage from "./pages/subscriptionPage";
import ForgetPasswordPage from "./pages/forgetPasswordPage";
import ResetPasswordPage from "./pages/resetPasswordPage";
import CategoryPage from "./pages/categoryPage";
import FeaturedNFTPage from "./pages/featuredNFTPage";

// Layout component to wrap the common layout structure
const Layout = () => {
  const location = useLocation();
  const showNavAndFooter = location.pathname !== "/login";

  return (
    <div>
      {showNavAndFooter && <NavBar />}
      <Outlet />
      {showNavAndFooter && <Footer />}
    </div>
  );
};

// ProtectedRoute component to handle protected routes
// const ProtectedRoute = ({ children }) => {
//   const currentUser = true; // Replace with your authentication logic

//   if (!currentUser) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoute>
      //   <Layout />
      // </ProtectedRoute>
      <Layout />
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/collection", element: <Collection /> },
      { path: "/author", element: <Author /> },
      { path: "/search-page", element: <SearchPage /> },
      { path: "/NFT-details/:id", element: <NFTDetails /> },
      { path: "/account", element: <Account /> },
      { path: "/upload-NFT", element: <UploadNFTPage /> },
      { path: "/connect-wallet", element: <ConnectWalletPage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      { path: "/about", element: <AboutUsPage /> },
      { path: "/subscription", element: <SubscriptionPage /> },
      { path: "/category/:id", element: <CategoryPage/> },
      { path: "/feature-NFTs", element: <FeaturedNFTPage/> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/forget-password", element: <ForgetPasswordPage /> },
  { path: "/resetPassword/:id", element: <ResetPasswordPage /> },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
