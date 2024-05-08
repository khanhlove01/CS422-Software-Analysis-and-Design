import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

//Internal Import
import Style from "./FollowerTabCard.module.css";

//Image Import
import images from "../../../img/index";

const FollowerTabCard = ({ i, el }) => {
  const [following, setFollowing] = useState(false);

  const followMe = () => {
    if (!following) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  };
  return (
    <div className={Style.followerTabCard}>
      <div className={Style.followerTabCard_rank}>
        <p>
          #{i + 1} <span>🥇</span>
        </p>
      </div>
      <div className={Style.followerTabCard_box}>
        <div className={Style.followerTabCard_box_img}>
          <img
            className={Style.followerTabCard_box_img_img}
            src={images.test_img_2}
            alt="profile braground"
          />
        </div>

        <div className={Style.followerTabCard_box_profile}>
          <img
            className={Style.followerTabCard_box_profile_img}
            alt="profile picture"
            width={80}
            height={80}
            src={el}
          />
        </div>

        <div className={Style.followerTabCard_box_info}>
          <div className={Style.followerTabCard_box_info_name}>
            <h4>
              NhutThi
              {""}{" "}
              <span>
                <MdVerified />
              </span>
            </h4>
            <p>123 ETH</p>
          </div>

          <div className={Style.followerTabCard_box_info_following}>
            {following ? (
              <a onClick={() => followMe()}>
                Follow{""}{" "}
                <span>
                  <TiTick />
                </span>
              </a>
            ) : (
              <a onClick={() => followMe()}>Following</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
