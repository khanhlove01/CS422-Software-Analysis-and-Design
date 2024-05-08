import React from "react";

//Internal Import
import Style from "../styles/collection.module.css";
import images from "../img/index";
import { Banner, CollectionProfile, NFTCardTwo} from "../collectionPage/collectionindex";
import { Slider, Brand } from "../components/componentsindex";
import Filter from "../components/Filter/Filter";

const Collection = () => {
  const collectionArray = [
    images.test_img,
    images.test_img_2,
    images.test_img,
    images.test_img_2,
    images.test_img,
    images.test_img_2,
    images.test_img,
    images.test_img_2,
  ]
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.test_img_2} />
      <CollectionProfile/>
      <NFTCardTwo  NFTData = {collectionArray}/>
      <Filter/>
      <Slider/>
      <Brand/>
    </div>
  );
};

export default Collection;
