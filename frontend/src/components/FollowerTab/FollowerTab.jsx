import React, { useState, useEffect } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";

//Internal Import
import Style from "./FollowerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";

//Image Import
import test_img from "../../img/tmp.png";
import test_img_2 from "../../img/tmp2.jpg";
import images from "../../img/index";
import { TbBackground } from "react-icons/tb";

const FollowerTab = () => {
  const CardArray = [
    {
      background: images.test_img_2,
      user: images.test_img,
    },
    {
      background: images.test_img_2,
      user: images.test_img_2,
    },
    {
      background: images.test_img,
      user: images.test_img,
    },
    {
      background: images.test_img_2,
      user: images.test_img,
    },
    {
      background: images.test_img,
      user: images.test_img_2,
    },
    {
      background: images.test_img,
      user: images.test_img,
    },
    {
      background: images.test_img_2,
      user: images.test_img_2,
    },
    {
      background: images.test_img,
      user: images.test_img,
    },
  ];
  const FollowingArray = [
    {
      background: images.test_img_2,
      user: images.test_img,
    },
    {
      background: images.test_img,
      user: images.test_img_2,
    },
    {
      background: images.test_img,
      user: images.test_img,
    },
    {
      background: images.test_img_2,
      user: images.test_img_2,
    },
    {
      background: images.test_img,
      user: images.test_img,
    },
  ];
  const NewsArray = [
    {
      background: images.test_img_2,
      user: images.test_img_2,
    },
    {
      background: images.test_img,
      user: images.test_img,
    },
    {
      background: images.test_img_2,
      user: images.test_img,
    },
    {
      background: images.test_img,
      user: images.test_img_2,
    },
    {
      background: images.test_img,
      user: images.test_img,
    },
    {
      background: images.test_img_2,
      user: images.test_img_2,
    },
  ];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };
  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };
  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };
  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2> Top Creators List..</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <button onClick={() => openPopular()}>
              <RiUserFollowFill /> Popular
            </button>
            <button onClick={() => openFollower()}>
              <RiUserFollowFill /> Following
            </button>
            <button onClick={() => openNews()}>
              <RiAwardLine /> NoteWorthy
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.followerTab_box}>
          {CardArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.followerTab_box}>
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {news && (
        <div className={Style.followerTab_box}>
          {NewsArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become author</a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
