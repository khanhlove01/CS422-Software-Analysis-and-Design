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
          <img src={test_img} alt="footer logo" height={100} width={100} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consequat ac mauris sit amet cursus. Cras ornare eleifend odio, eget
            eleifend nisl consectetur vitae. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Ut
            mattis porttitor metus sit amet malesuada. Etiam hendrerit enim dui.
          </p>

          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
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

        <div className={Style.subsribe}>
          <h3>Subscribe</h3>
          <div className={Style.subsribe_box}>
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className={Style.subsribe_box_send} />
          </div>

          <div className={Style.subsribe_box_info}>
            <p>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Aenean ut lectus pharetra, venenatis tortor sit amet, finibus
              nibh. Nullam pretium iaculis dignissim. In ullamcorper quis arcu
              ac accumsan. Vivamus sollicitudin, arcu in hendrerit dignissim,
              nunc nulla finibus nulla, sit amet malesuada mauris ex vitae urna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
