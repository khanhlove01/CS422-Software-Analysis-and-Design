import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//Internal Import
import Style from "./AudioCard.module.css";
import LikeProfile from "../../LikeProfile/LikeProfile";

//Image import
import test_img from "../../../img/tmp.png";
import test_img_2 from "../../../img/tmp2.jpg";

const AudioCard = () => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const playMusic = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };
  return (
    <div className={Style.audioCard}>
      <div className={Style.audioCard_box}>
        <div className={Style.audioCard_box_like_time}>
          <div className={Style.audioCard_box_like} onClick={() => likeNft()}>
            {like ? (
              <AiFillHeart className={Style.audioCard_box_like_icon} />
            ) : (
              <AiOutlineHeart
                className={Style.audioCard_box_like_icon_unlike}
              />
            )}

            <span>24</span>
          </div>

          <div className={Style.audioCard_box_time}>
            <div className={Style.audioCard_box_like_time_remaing}>
              <small>Reaming time</small>
              <h5>3h : 15m :20s</h5>
            </div>
          </div>
        </div>
        <div className={Style.audioCard_box_player}>
          <img src="https://pbs.twimg.com/media/E-6_nIuVkAMu-63?format=jpg&name=4096x4096" alt="musice" width={200} />
          <div
            className={Style.audioCard_box_musicPlayer}
            onClick={() => playMusic()}
          >
            {play ? (
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPause />
              </div>
            ) : (
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPlay />
              </div>
            )}
          </div>
        </div>
        <div className={Style.audioCard_box_details}>
          <div className={Style.audioCard_box_details_info}>
            <h4>NFT music #1123</h4>
            <div className={Style.audioCard_box_details_info_price}>
              <small>Price</small>
              <p>$3,221.33</p>
            </div>
          </div>

          <div className={Style.audioCard_box_details_stock}>
            <small>24 in stock</small>
          </div>
        </div>
        <div className={Style.audioCard_box_img}>
          <img
            src="https://pbs.twimg.com/media/E-6_nIuVkAMu-63?format=jpg&name=4096x4096"
            alt="background"
            width={500}
            height={500}
          />
        </div>
      </div>
      
    </div>
  );
};

export default AudioCard;
