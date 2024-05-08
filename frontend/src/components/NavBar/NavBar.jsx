import React, { useState } from "react";
import { Link } from "react-router-dom";

//Import Icon
import { IoMdNotifications } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//Internal import
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "../componentsindex";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Notification") {
      setDiscover(false);
      setHelp(false);
      setNotification(true);
      setProfile(false);
    } else if (btnText == "Profile") {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(true);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setNotification(false);
      setDiscover(false);
      setHelp(false);
      setProfile(true);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    console.log(openSideMenu);
    if (!openSideMenu){
      setOpenSideMenu(true);
    }
    else{
      setOpenSideMenu(false);
    }
  }

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <img
              src="https://cdn-teams-slug.flaticon.com/google.jpg"
              alt="NFF MARKET PLACE"
              width={100}
              height={100}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* End of left section */}
        <div className={Style.navbar_container_right}>
          {/* Discover section */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* Help center section */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Notification section */}
          <div className={Style.navbar_container_right_notify}>
            <IoMdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          {/* Create button section */}
          <div className={Style.navbar_container_right_button}>
            {/* <Button btnText="Create" /> */}
            <Button btnName="Create" handleClick={()=>{}}/>
          </div>

          {/* Profile section */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <img
                src="https://cdn-teams-slug.flaticon.com/google.jpg"
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />

              {profile && <Profile />}
            </div>
          </div>

          {/* Menu Button */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* Sidebar component */}
      {
        openSideMenu && ( 
          <div className={Style.sideBar}>
            <SideBar setOpenSideMenu={setOpenSideMenu}/>
          </div>
        )
      }
    </div>
  );
};

export default NavBar;
