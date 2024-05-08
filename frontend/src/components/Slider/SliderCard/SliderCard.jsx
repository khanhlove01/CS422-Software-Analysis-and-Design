import React from "react";
import { motion } from "framer-motion";

//INTERNAL IMPORT
import Style from "./SliderCard.module.css";
import LikeProfile from "../../LikeProfile/LikeProfile";


const SliderCard = ({ el, i }) => {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <img
            src={el.background}
            className={Style.sliderCard_box_img_img}
            alt="slider profile"
            objectFit="cover"
          />
        </motion.div>
        <div className={Style.sliderCard_box_title}>
          <p>NFT Video #{i + 1}</p>
          <div className={Style.sliderCard_box_title_like}>
            {/* <LikeProfile /> */}
            <small>{i + 4} 0f 100</small>
          </div>
        </div>

        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>{i + 2}.000 ETH</p>
          </div>

          <div className={Style.sliderCard_box_price_time}>
            <small>Reaming time</small>
            <p>
              {i + 1}h : 15m : {i + 4}0s
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SliderCard