import React from "react";

//Internal Import
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";

//IMAGE Import
import test_img from "../../img/tmp.png";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect, and sell NFTs </h1>
          <p>
            Duis quis rutrum nisi. Phasellus sem justo, mattis in lacus nec,
            suscipit mollis arcu.
          </p>
          <Button btnName="Start your search"/>
        </div>
        <div className={Style.heroSection_box_right}>
            <img src={test_img} alt="Hero section"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
