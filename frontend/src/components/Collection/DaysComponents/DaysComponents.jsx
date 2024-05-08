import React from "react";
import { MdVerified } from "react-icons/md";

//INTERNAL IMPORT
import Style from "./DaysComponents.module.css";

//Image Import
import test_img from "../../../img/tmp.png";
import test_img_2 from "../../../img/tmp2.jpg";

const DaysComponents = ({el, i}) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <img
            src={el.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <img
            src={el.user}
            alt="profile"
            width={160}
            height={160}
            className={Style.daysComponent_box_img_1}
            objectFit="covers"
          />
          <img
            src={el.user}
            alt="profile"
            width={160}
            height={160}
            className={Style.daysComponent_box_img_2}
            objectFit="covers"
          />
          <img
            src={el.user}
            alt="profile"
            width={160}
            height={160}
            className={Style.daysComponent_box_img_3}
            objectFit="covers"
          />
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <img
                src={test_img_2}
                alt="profile"
                width={30}
                height={30}
                objectFit="covers"
                className={Style.daysComponent_box_title_info_profile_img}
              />

              <p>
                Creator
                <span>
                  Shoaib Bhai
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
