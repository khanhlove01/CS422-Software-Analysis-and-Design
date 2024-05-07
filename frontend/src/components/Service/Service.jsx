import React from "react";

//Internal Import
import Style from "./Service.module.css";

//IMAGE Import
import test_img from "../../img/tmp.png";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <img
            src={test_img}
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
            src={test_img}
            alt="Filter & Discover"
            width={150}
            height={150}
          />

          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={Style.service_box_item}>
          <img
            src={test_img}
            alt="Connect Wallet"
            width={150}
            height={150}
          />

          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn
            money
          </p>
        </div>
        <div className={Style.service_box_item}>
          <img
            src={test_img}
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
