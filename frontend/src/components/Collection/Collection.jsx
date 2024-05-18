import React, { useState, useEffect } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

//Internal Import
import Style from "./Collection.module.css";
import DaysComponent from "./DaysComponents/DaysComponents";

//Image Import
import images from "../../img/index"


const Collection = () => {
  const[popular, setPopular] = useState(true);
  const[following, setFollowing] = useState(false);
  const[news, setNews] = useState(false);

  const CardArray = [
    {
      background: "https://pbs.twimg.com/media/Fw-YY9naUAEx2z2?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/F3kUDqbagAAmGJZ?format=jpg&name=4096x4096",
      name: "Minh Khanh",
      collection: "Battle Collection"
    },
    {
      background: "https://pbs.twimg.com/media/FcsiU-iaUAEVSlh?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/FcsiU-iaUAEVSlh?format=jpg&name=4096x4096",
      name: "Minh Khanh",
      collection: "Library Collection"
    },
    {
      background: "https://pbs.twimg.com/media/Fedl7uqVIAAiVQO?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/Fedl7uqVIAAiVQO?format=jpg&name=4096x4096",
      name: "Minh Khanh",
      collection: "Modern City Collection"
    },
  ];
  const FollowingArray = [
    {
      background: "https://pbs.twimg.com/media/FThU8BmVIAAakXW?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/FThU8BmVIAAakXW?format=jpg&name=4096x4096",
      name: "Minh Khanh",
      collection: "Cyberpunk Collection"

    },
    {
      background: "https://pbs.twimg.com/media/FP-6DTsaIAI9rS6?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/FP-6DTsaIAI9rS6?format=jpg&name=4096x4096",
      name: "Minh Khanh",
      collection: "War Collection"

    },
    {
      background: "https://pbs.twimg.com/media/FMXRN06VUAQzYGn?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/FMXRN06VUAQzYGn?format=jpg&name=4096x4096",
      name: "Minh Khanh",
      collection: "Top View Collection"

    },
  ];
  const NewsArray = [
    {
      background: "https://pbs.twimg.com/media/E3MTb__UUAUtI9z?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/E3MTb__UUAUtI9z?format=jpg&name=4096x4096",
      name: "Hong Nhut",
      collection: "Forest Battle Collection"

    },
    {
      background: "https://pbs.twimg.com/media/EuleiYzVIAcaWO7?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/EuleiYzVIAcaWO7?format=jpg&name=4096x4096",
      name: "Hong Nhut",
      collection: "Destroy City Collection"

    },
    {
      background: "https://pbs.twimg.com/media/EpBquG8VEAA6bSu?format=jpg&name=4096x4096",
      user: "https://pbs.twimg.com/media/EpBquG8VEAA6bSu?format=jpg&name=4096x4096",
      name: "Hong Nhut",
      collection: "Pokemon Gathering Collection"

      
    },
  ];
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
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> 24 hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar3 /> 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> 30 days
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.collection_box}>
          {CardArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.collection_box}>
          {FollowingArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.collection_box}>
          {NewsArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Collection