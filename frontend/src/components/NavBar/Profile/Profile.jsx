import React from "react";

import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";

//Internal import
import Style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <img
          src="https://cdn-teams-slug.flaticon.com/google.jpg"
          alt="user profile"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />
        <div className={Style.profile_account_info}>
          <p>Hello world</p>
          <small>123456</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <a href="./myprofile">My profile</a>
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
              <a href="./edt-profile">Edit Profile</a>
            </p>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
            <a href="./help">Help</a>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
            <a href="./Disconnect">Disconnect</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
