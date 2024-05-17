import React from "react";

//Internal import
import Style from "./Notification.module.css";
import images from "../../../img/index"
import img from "../../../img/index";

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <img
            src={images.test_img_2}
            alt="profile image"
            width={50}
            height={50}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Hello world</h4>
          <p>Measure action of users....</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <img
            src={images.test_img_2}
            alt="profile image"
            width={50}
            height={50}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Hello world</h4>
          <p>Measure action of users....</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <img
            src={images.test_img_2}
            alt="profile image"
            width={50}
            height={50}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Hello world</h4>
          <p>Measure action of users....</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
