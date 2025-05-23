import React, { useCallback, useEffect, useState } from "react";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

//Internal Import
import Style from "./BigNFTSlider.module.css";
import { Button } from "../componentsindex";

//IMAGE Import
import test_img from "../../img/tmp.png";
import test_img_2 from "../../img/tmp2.jpg";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Minh Khanh",
      collection: "Space",
      price: "00664 ETH",
      like: 243,
      image: "https://pbs.twimg.com/media/GLHyzbUaoAAqMuT?format=jpg&name=4096x4096",
      nftImage: "https://pbs.twimg.com/media/ExjITWfU4AMzcnt?format=jpg&name=900x900",
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Minh Khanh",
      collection: "Forest",
      price: "0000004 ETH",
      like: 243,
      image: "https://pbs.twimg.com/media/GLHyzbUaoAAqMuT?format=jpg&name=4096x4096",
      nftImage: test_img_2,
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Minh Khanh",
      collection: "Sea",
      price: "0000064 ETH",
      like: 243,
      image: "https://pbs.twimg.com/media/GLHyzbUaoAAqMuT?format=jpg&name=4096x4096",
      nftImage: test_img,
      time: {
        days: 37,
        hours: 20,
        minutes: 11,
        seconds: 55,
      },
    },
    {
      title: "Home NFT",
      id: 4,
      name: "Minh Khanh",
      collection: "Forest",
      price: "4664 ETH",
      like: 243,
      image: "https://pbs.twimg.com/media/GLHyzbUaoAAqMuT?format=jpg&name=4096x4096",
      nftImage: test_img_2,
      time: {
        days: 87,
        hours: 29,
        minutes: 10,
        seconds: 15,
      },
    },
  ];
  //Increase function
  const inc = useCallback(()=>{
    if (idNumber + 1 < sliderData.length){
      setIdNumber(idNumber + 1);
    }
    console.log(idNumber);
  }, [idNumber, sliderData.length])

  //Decrease function
  const dec = useCallback(()=>{
    if (idNumber > 0){
      setIdNumber(idNumber - 1);
    }
    console.log(idNumber);
  }, [idNumber])


  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <img
                src={sliderData[idNumber].image}
                alt="profile image"
                width={80}
                height={80}
              />
              <div
                className={Style.bigNFTSlider_box_left_creator_profile_image}
              >
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />
              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>
          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price}
                <span>$221,21</span>
              </p>
            </div>
            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_auction_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>
            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>
          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>
        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <img src={sliderData[idNumber].nftImage} alt="NFT Image" className={Style.bigNFTSlider_box_right_box_img} />
            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart/>
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;
