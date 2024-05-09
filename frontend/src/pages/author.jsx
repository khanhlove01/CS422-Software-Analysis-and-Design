import React, { useState } from "react";

//Internal Import
import Style from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "../collectionPage/collectionindex";
import { Brand, Title } from "../components/componentsindex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import { AuthorNFTCardBox, AuthorProfileCard, AuthorTaps } from "../authorPage/componentIndex";

import images from "../img/index";

const Author = () => {
  const popularArray = [
    images.test_img,
    images.test_img_2,
    images.test_img,
    images.test_img_2,
    images.test_img,
    images.test_img_2,
    images.test_img,
    images.test_img_2,
  ];
  const [collectable, setCollectable] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={Style.author}>
        <Banner bannerImage={images.test_img_2}/>
        <AuthorProfileCard/>
        <AuthorTaps/>
    </div>
  );
};

export default Author;
