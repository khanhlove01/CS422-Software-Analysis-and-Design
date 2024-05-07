import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

//Internal Import
import Style from "./Subscribe.module.css";

//Image import
import test_img from "../../img/tmp.png";
import test_img_2 from "../../img/tmp2.jpg";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never miss a drop</h2>
          <p>
            Subcribe to our super-exclusive drop list and be the first to know
            abour upcoming drops
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more</small>
          </div>
          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium magazines</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>
        <div className={Style.subscribe_box_right}>
          <img
            src={test_img_2}
            alt="get update"
            height={500}
            width={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
