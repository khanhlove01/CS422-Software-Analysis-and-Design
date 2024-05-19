import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from "react-router-dom";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import { Discover, HelpCenter } from "../NavBar/index";

//IMAGE Import
import test_img from "../../img/tmp.png";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <div className={Style.logo}>
            <p>NFTMarketplace</p>
          </div>

          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>

          <div className={Style.footer_social}>
            <a href="https://www.facebook.com/13laem/">
              <TiSocialFacebook />
            </a>
            <a href="https://www.linkedin.com/">
              <TiSocialLinkedin />
            </a>
            <a href="https://www.instagram.com/tm.khanhhhhh/">
              <TiSocialInstagram />
            </a>
            <a href="https://x.com/KhnhTrnMin51907">
              <TiSocialTwitter />
            </a>
            <a href="https://www.youtube.com/">
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>

          <div className={Style.subsribe_box_info}>
            <p>
              Discover, collect, and sell extraordinary NFTs OpenSea is the
              world first and largest NFT marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
