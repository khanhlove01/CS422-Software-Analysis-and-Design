import React from "react";

//Internal Import
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
} from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Slider/>
      <Title
        heading="Latest Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <AudioLive/>
      <Title
        heading="Filter by Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Collection/>
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Filter/>
      <NFTCard/>
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories"
      />
      <Category />
      <FollowerTab/>
      
      <Subscribe />
    </div>
  );
};

export default Home;
