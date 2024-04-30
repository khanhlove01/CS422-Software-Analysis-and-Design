import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

//Internal Import
import Style from "./SideBar.module.css";

const SideBar = ({setOpenSideMenu}) => {
  //Use state
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  //Discover option
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  //Help center option
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () =>{
    if (!openDiscover){
      setOpenDiscover(true);
    }
    else{
      setOpenDiscover(false);
    }
  }

  const openHelpMenu = () => {
    if (!openHelp){
      setOpenHelp(true);
    }
    else{
      setOpenHelp(false);
    }
  }

  const closeSideBar = () =>{
    setOpenSideMenu(false);
  }

  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />

      <div className={Style.sideBar_box}>
        <img src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="logo" width={150} height={150}/>
        <p>Discover the most outstanding articles</p>

        <div className={Style.sideBar_social}>
          <a href="#">
            <TiSocialFacebook/>
          </a>
          <a href="#">
            <TiSocialLinkedin/>
          </a>
          <a href="#">
            <TiSocialInstagram/>
          </a>
          <a href="#">
            <TiSocialTwitter/>
          </a>
          <a href="#">
            <TiSocialYoutube/>
          </a>
        </div>
      </div>

      <div className={Style.sideBar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} onClick={()=>openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown/>
          </div>

          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((item, index) => (
                <p key={index + 1}>
                  <a href={`${item.link}`}>{item.name}</a>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className={Style.sideBar_menu_box} onClick={()=>openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown/>
          </div>

          {openHelp && (
            <div className={Style.sideBar_discover}>
              {helpCenter.map((item, index) => (
                <p key={index + 1}>
                  <a href={`${item.link}`}>{item.name}</a>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={Style.sideBar_button}>
          <button>Create</button>
          <button>Connect Wallet</button>
      </div>
    </div>
  );
};

export default SideBar;
