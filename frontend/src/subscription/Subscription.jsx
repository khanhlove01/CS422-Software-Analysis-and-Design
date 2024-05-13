import React from "react";
import { TiTick } from "react-icons/ti";

//Internal Import
import Style from "./Subscription.module.css";
import { Button } from "../components/componentsindex";

const Subscription = ({ el, i }) => {
  return (
    <div className={Style.SubscriptionBox}>
      <div className={Style.SubscriptionBox_box}>
        <div className={Style.SubscriptionBox_box_container}>
          <span className={Style.SubscriptionBox_box_span}>{el.plan}</span>
          {el.popular === "" ? null : (
            <small className={Style.SubscriptionBox_box_small}>
              {el.popular}
            </small>
          )}

          <p className={Style.SubscriptionBox_box_price}>{el.price}</p>

          <div className={Style.SubscriptionBox_box_info}>
            {el.service.map((el, i) => (
              <p className={Style.SubscriptionBox_box_info_para} key={i + 1}>
                <span>
                  <TiTick />
                </span>
                {el}
              </p>
            ))}
          </div>
        </div>

        <Button
          btnName="Submit"
          handleClick={() => {}}
          classStyle={Style.button}
        />
      </div>
    </div>
  );
};

export default Subscription;
