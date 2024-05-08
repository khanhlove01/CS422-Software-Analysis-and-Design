import React from 'react'
//Internal Import
import Style from "./LikeProfile.module.css"
//Image import
import test_img from "../../../img/tmp.png";
import test_img_2 from "../../../img/tmp2.jpg";

const LikeProfile = () => {
    const imageArray = [1,2,3,4];
  return (
    <div className={Style.like}>
      {imageArray.map((el, i) => (
        <div className={Style.like_box} key={i + 1}>
          <Image
            src={test_img_2}
            width={15}
            height={15}
            key={i + 1}
            className={Style.like_box_img}
          />
        </div>
      ))}
    </div>
  )
}

export default LikeProfile