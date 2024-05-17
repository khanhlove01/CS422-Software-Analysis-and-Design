import React from 'react'
import { FaHandshake } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";

//Internal Import
import Style from "../styles/aboutUsPage.module.css"
import { Brand } from '../components/componentsindex'
import images from "../img/index"

const AboutUsPage = () => {
    const founderArray = [
        {
          name: "Thi Hong Nhut",
          position: "Co-founder",
          images: images.test_img,
        },
        {
          name: "Tran Minh Khanh",
          position: "Co-founder",
          images: images.test_img_2,
        },
      ];
    
      const factsArray = [
        {
          title: "10 million",
          info: "Articles have been public around the world (as of Sept. 30, 2021)",
        },
        {
          title: "100,000",
          info: "Registered users account (as of Sept. 30, 2021)",
        },
        {
          title: "220+",
          info: "Countries and regions have our presence (as of Sept. 30, 2021",
        },
      ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1><FaHandshake className={Style.icon}/> About Us.</h1>
            <p>
              We’re impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <img src={images.test_img_2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2><FaHeartbeat className={Style.icon}/> Founder</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <img
                  src={el.images}
                  alt={el.name}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2><FaRegSnowflake className={Style.icon}/> Fast Facts</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  )
}

export default AboutUsPage