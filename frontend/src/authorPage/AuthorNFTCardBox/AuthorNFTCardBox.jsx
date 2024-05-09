import React, { useState } from "react";

//Internal Import
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img/index";
import { NFTCardTwo } from "../../collectionPage/collectionindex";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
}) => {
  const collectiablesArray = [
    images.test_img,
    images.test_img_2,
    images.test_img_3,
    images.test_img,
    images.test_img_2,
    images.test_img_3,
    images.test_img,
    images.test_img_2,
  ];

  const createdArray = [
    images.test_img,
    images.test_img_2,
    images.test_img_3,
  ];

  const likeArray = [
    images.test_img,
    images.test_img_2,
    images.test_img_3,
    images.test_img,
    images.test_img_2,
    images.test_img_3,
  ];

  const followerArray = [
    {
      background: images.test_img_2,
      user: images.test_img,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.test_img_3,
      user: images.test_img,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.test_img_2,
      user: images.test_img_2,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.test_img_3,
      user: images.test_img_2,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.test_img_2,
      user: images.test_img_3,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.test_img_3,
      user: images.test_img_2,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    
  ];

  const followingArray = [
    {
      background: images.test_img_3,
      user: images.test_img,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.test_img_2,
      user: images.test_img_2,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
    {
      background: images.test_img_3,
      user: images.test_img_2,
      seller: "d84ff74hf99999f9974hf774f99f",
    },
  ];

  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={collectiablesArray}/>}
      {created && <NFTCardTwo NFTData={createdArray}/>}
      {like && <NFTCardTwo NFTData={likeArray}/>}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
