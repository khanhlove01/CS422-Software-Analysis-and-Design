import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineSpeakerNotes, MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

//Internal Import
import Style from "../styles/contactUsPage.module.css";
import { Button } from "../components/componentsindex";

const ContactUsPage = () => {
  return (
    <div className={Style.contactus}>
      <div className={Style.contactus_box}>
        <h1>Contact</h1>
        <div className={Style.contactus_box_box}>
          <div className={Style.contactus_box_box_left}>
            <div className={Style.contactus_box_box_left_item}>
              <h3>
                <MdOutlineSpeakerNotes className={Style.icon} /> ADDRESS
              </h3>
              <p>
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>
                <MdEmail className={Style.icon} /> EMAIL
              </h3>
              <p>nc.example@example.com</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>
                <FaPhone className={Style.icon} /> PHONE
              </h3>
              <p>000-123-456-7890</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>
                <FaEarthAmericas className={Style.icon} />
                SOCIALS
              </h3>
              <div className={Style.contactus_box_box_left_item_social}>
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
          </div>
          <div className={Style.contactus_box_box_right}>
            <form>
              <div className={Style.contactus_box_input}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className={Style.contactus_box_input_userName}
                />
              </div>
              <div className={Style.contactus_box_input}>
                <label htmlFor="email">Email</label>
                <div className={Style.contactus_box_input_box}>
                  <div className={Style.contactus_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="text" placeholder="Enter your email...." />
                </div>
              </div>
              <div className={Style.contactus_box_input}>
                <label htmlFor="description">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Send us your message..."
                ></textarea>
              </div>
              <div className={Style.button_container}>
                <Button
                  btnName="Send Message"
                  handleClick={() => {}}
                  className={Style.button}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
