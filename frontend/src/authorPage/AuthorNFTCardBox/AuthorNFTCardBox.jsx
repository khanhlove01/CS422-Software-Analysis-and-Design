import React, { useState, useEffect } from "react";

//Internal Import
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img/index";
import { NFTCardTwo } from "../../collectionPage/collectionindex";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import axios from "axios";

const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
}) => {
  const [arrayImage,setArrayImage] = useState([]);
  const fetchSlider = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/nfts", {
        // headers: {
        //   Authorization: `Bearer ${current.token}`
        // }
      });
      console.log(response.data.data.nfts);
      console.log("Author");
      setArrayImage(response.data.data.nfts);
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }
  useEffect(() => {
    fetchSlider();
  }, []);
  const collectiablesArray = arrayImage.filter((el) => el.elemental.toLowerCase() === "forest");

  const createdArray = arrayImage.filter((el) => el.elemental.toLowerCase() === "sea");

  const likeArray = arrayImage.filter((el) => el.elemental.toLowerCase() === "sky");

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
