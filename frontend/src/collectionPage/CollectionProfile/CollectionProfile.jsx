import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./CollectionProfile.module.css";
import images from "../../img/index";

const collectionProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <img
            src={images.test_img_2}
            alt="nft image"
            className={Style.collectionProfile_box_left_img}
          />

          <div className={Style.collectionProfile_box_left_social}>
            <a href="#">
              <TiSocialFacebook className={Style.icon}/>
            </a>
            <a href="#">
              <TiSocialInstagram className={Style.icon}/>
            </a>
            <a href="#">
              <TiSocialLinkedin className={Style.icon}/>
            </a>
            <a href="#">
              <TiSocialTwitter className={Style.icon}/>
            </a>
          </div>
        </div>

        <div className={Style.collectionProfile_box_middle}>
          <h1>Awesome NFTs Collection</h1>
          <p>
            Karafuru is home to 5,555 generative arts where colors reign
            supreme. Leave the drab reality and enter the world of Karafuru by
            Museum of Toys.
          </p>

          {/* <div className={Style.collectionProfile_box_middle_box}>
            {cardArray.map((el, i) => (
              <div
                className={Style.collectionProfile_box_middle_box_item}
                key={i + 1}
              >
                <small>Floor price</small>
                <p>${i + 1}95,4683</p>
                <span>+ {i + 2}.11%</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default collectionProfile;
