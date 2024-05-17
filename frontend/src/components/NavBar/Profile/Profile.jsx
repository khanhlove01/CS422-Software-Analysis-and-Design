import React from "react";
import { useContext,useState } from "react";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import { AuthContext } from "../../../context/authContext";
//Internal import
import Style from "./Profile.module.css";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(
    "https://pbs.twimg.com/media/GCr11sgXEAADIpg?format=jpg&name=large"
  );
  const { currentUser, login, logout } = useContext(AuthContext);
  //console.log(currentUser);
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <img
          src={profileImage}
          alt="user profile"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />
        <div className={Style.profile_account_info}>
          <p>{currentUser.data.user.name}</p>
          <small>{currentUser.data.user.email}</small>
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
          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <a href="./my-items">My items</a>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <a href="./edit-profile">Edit Profile</a>
            </p>
          </div>
        </div>

        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <a href="./help">Help</a>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <a href="./login" onClick={logout}>Logout</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
