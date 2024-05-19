import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify"; 
import { useNavigate } from "react-router-dom";

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
  Brand,
  Video,
} from "../components/componentsindex";



const Home = () => {
  return (
    <div className={Style.homePage}>
      <ToastContainer style={{ zIndex: 999999 }}/>
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
      {/* <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      /> */}
      {/* <Filter/> */}
      {/* <NFTCard/> */}
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories"
      />
      <Category />
      <FollowerTab/>
      
      <Subscribe />
      <Brand/>
      <Video/>
    </div>
  );
};

export default Home;
