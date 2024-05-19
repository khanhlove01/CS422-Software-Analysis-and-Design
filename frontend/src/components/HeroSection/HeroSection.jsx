import React from "react";
import { useNavigate } from "react-router-dom";

//Internal Import
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";

//IMAGE Import
import test_img from "../../img/tmp.png";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./search-page");
  };
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect, and sell NFTs </h1>
          <p>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <Button btnName="Start your search" handleClick={handleClick}/>
        </div>
        <div className={Style.heroSection_box_right}>
          <img src="https://pbs.twimg.com/media/GBY0LXraAAAGA81?format=jpg&name=4096x4096" alt="Hero section" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
