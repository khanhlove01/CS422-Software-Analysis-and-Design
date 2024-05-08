import React, { useState } from "react";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//Internal Import
import Style from "./AudioCardSmall.module.css";

//Image import
import test_img from "../../../img/tmp.png";
import test_img_2 from "../../../img/tmp2.jpg";

const AudioCardSmall = () => {
  const [play, setPlay] = useState(false);

  const playMusic = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };
  return (
    <div className={Style.audioPlayer}>
      <div className={Style.audioPlayer_box}>
        <img
          src={test_img}
          alt="music"
          width={100}
          height={100}
          className={Style.audioPlayer_box_img}
        />

        <div className={Style.audioPlayer_box_info}>
          <h4>NFT music #1142</h4>
          <div className={Style.audioPlayer_box_info_box}>
            <div>Like Profile</div>
            <div className={Style.audioPlayer_box_info_box_price}>
              <small>Price</small>
              <p>1.00 ETH</p>
            </div>
          </div>
        </div>

        <div
          className={Style.audioPlayer_box_playBtn}
          onClick={() => playMusic()}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
};


export default AudioCardSmall