import React, { useState } from "react";

//Internal Import
import Style from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "../collectionPage/collectionindex";
import { Brand, Title } from "../components/componentsindex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import {
  AuthorNFTCardBox,
  AuthorProfileCard,
  AuthorTaps,
} from "../authorPage/componentIndex";

import images from "../img/index";

const Author = () => {
  const popularArray = [
    {
      background: images.test_img,
    },
    {
      background: images.test_img_2,
    },
    {
      background: images.test_img_3,
    },
    {
      background: images.test_img,
    },
    {
      background: images.test_img_2,
    },
    {
      background: images.test_img_3,
    },
    
    
  ];
  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.test_img_2} />
      <AuthorProfileCard />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}/>
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NFT music and audio"
      />
      <div className={Style.author_box}>
        {popularArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} key={i + 1} />
        ))}
      </div>
      <Brand/>
    </div>
  );
};

export default Author;
