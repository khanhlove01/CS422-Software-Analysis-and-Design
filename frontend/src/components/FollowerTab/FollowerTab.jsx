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
      background: "https://pbs.twimg.com/media/Fj7wvUzUAAAcqNo?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/GHa18RLagAATUZE?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/FzTal2laAAAFgMn?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/GC6pjIcagAAsP0Y?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/FzTat5faAAA_-WU?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/FuZH36paUAA4cQi?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/FzTaxQVagAEzPNx?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/F-psYRvbkAA8G-9?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/F7mKL3Ja8AAYWB_?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/F5vq8wkbQAAvRBD?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/F7M422yboAATxqv?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/F6YqtGsbkAACyH9?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/F6tGfVUaEAAB5ft?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/F5lBQz9aoAAtRQN?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/F27MZwObkAAUNWX?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/FxnORKwaUAg2KVl?format=jpg&name=4096x4096",
    },
  ];
  const FollowingArray = [
    {
      background: "https://pbs.twimg.com/media/FP0rguMVgAIgtc_?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/GHa18RLagAATUZE?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/FP0rhOrUYAUukNo?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/F-psYRvbkAA8G-9?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/FP0rivSVsAAx2E4?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/GHa18RLagAATUZE?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/FP0rjRNVUAkTkAu?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/FaDEd7WVQAA12sx?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/FPvpta3VUAAN2FJ?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/FYh9-m-VUAAZeGk?format=jpg&name=4096x4096",
    },
  ];
  const NewsArray = [
    {
      background: "https://pbs.twimg.com/media/EmxfNxzVkAEn4Po?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/GHa18RLagAATUZE?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/EmIv7hmVkAAc9Cu?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/ER3bR-5U4AE1-65?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/EmIv7-PVgAMzkoA?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/ER3bUAzVAAQtWa9?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/EmIv8lmU4AARjaO?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/ER3bUkjU0AAQg0C?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/EmIv9JQVkAAZOOj?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/ER3bWdBU4AE_VEV?format=jpg&name=4096x4096",
    },
    {
      background: "https://pbs.twimg.com/media/EYnddEaUYAIh3Ty?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/EO-AM8mVAAA4sWa?format=jpg&name=4096x4096",
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
