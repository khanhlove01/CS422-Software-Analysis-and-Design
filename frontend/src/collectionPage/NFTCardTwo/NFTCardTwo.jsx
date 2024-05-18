import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";

//Internal Import
import Style from "./NFTCardTwo.module.css";
import { LikeProfile } from "../../components/componentsindex";

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };
  return (
    <div className={Style.NFTCardTwo}>
      {NFTData?.map((el, i) => (
        <div className={Style.NFTCardTwo_box} key={i + 1}>
          <div className={Style.NFTCardTwo_box_like}>
            <div className={Style.NFTCardTwo_box_like_box}>
              <div className={Style.NFTCardTwo_box_like_box_box}>
                <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                {/* <p onClick={() => likeNFT()}>
                  {like ? <AiOutlineHeart className={Style.icon}/> : <AiFillHeart className={Style.icon}/>}
                  {""}
                  <span>{likeInc + 1}</span>
                </p> */}
              </div>
            </div>
          </div>

          <div className={Style.NFTCardTwo_box_img}>
            <img
              src={el.imageCover}
              alt="NFT"
              className={Style.NFTCardTwo_box_img_img}
            />
          </div>

          <div className={Style.NFTCardTwo_box_info}>
            <div className={Style.NFTCardTwo_box_info_left}>
              <p>{el.name}</p>
            </div>
            <small>{el.ratingsAverage}</small>
          </div>

          <div className={Style.NFTCardTwo_box_price}>
            <div className={Style.NFTCardTwo_box_price_box}>
              <small>Current Bid</small>
              <p>{el.price} USDT</p>
            </div>
            <p className={Style.NFTCardTwo_box_price_stock}>
              <MdTimer /> <span>{el.duration} hours left</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCardTwo;
