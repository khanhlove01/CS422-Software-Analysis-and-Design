import React from "react";

//Internal Import
import Style from "./Service.module.css";

//IMAGE Import
import test_img from "../../img/tmp.png";
import images from "../../img/index"
import img from "../../img/index";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <img
            src={images.img_water}
            alt="Filter & Discover"
            width={150}
            height={150}
          />

          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={Style.service_box_item}>
          <img
            src={images.img_fire}
            alt="Filter & Discover"
            width={150}
            height={150}
          />

          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={Style.service_box_item}>
          <img
            src={images.img_grass}
            alt="Connect Wallet"
            width={150}
            height={150}
          />

          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Start Trading</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={Style.service_box_item}>
          <img
            src={images.img_electric}
            alt="Filter & Discover"
            width={150}
            height={150}
          />

          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
