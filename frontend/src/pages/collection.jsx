import React from "react";

//Internal Import
import Style from "../styles/collection.module.css";
import images from "../img/index";
import { Banner, CollectionProfile } from "../collectionPage/collectionindex";
import { Slider, Brand } from "../components/componentsindex";
import Filter from "../components/Filter/Filter";

const Collection = () => {
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.test_img_2} />
      <CollectionProfile/>
    </div>
  );
};

export default Collection;
