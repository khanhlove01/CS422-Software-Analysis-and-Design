import React, { useContext, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import { AuthContext } from "../../../context/authContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Style from "./Profile.module.css";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(
    "https://pbs.twimg.com/media/GCr11sgXEAADIpg?format=jpg&name=large"
  );
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    logout();
    navigate('/login', { state: { message: "You have been logged out successfully!" } });
    console.log("Log out");
  };

  return (
    <div className={Style.profile}>
      <ToastContainer />
      <div className={Style.profile_account}>
        <img
          src={profileImage}
          alt="user profile"
          className={Style.profile_account_img}
        />
        <div className={Style.profile_account_info}>
          <p>{currentUser ? currentUser.data.user.name : "No account"}</p>
          <small>{currentUser ? currentUser.data.user.email : null}</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <a href="./account">My profile</a>
            </p>
          </div>        
        </div>

        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item} onClick={handleLogout}>
            <TbDownload />
            <p>
              <a href="" >Logout</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
