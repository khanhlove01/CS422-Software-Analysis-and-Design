import React from 'react'

//Internal Import
import Style from "./Brand.module.css"
import {Button} from "../../components/componentsindex"

//Image import
import images from "../../img/index.js";

const Brand = () => {
  return (
    <div className={Style.brand}>
      <div className={Style.brand_box}>
        <div className={Style.brand_box_left}>
          {/* <img src={images.test_img_2} alt='brand logo' width={100} height={100}/> */}
          <h1>Earn free crypto with Ciscrypt</h1>
          <p>A creative agency that lead and inspire.</p>
          <div className={Style.brand_box_left_btn}>
            <Button
              btnName="Create"
              handleClick={() => {}}
            />
            <Button
              btnName="Discover"
              handleClick={() => {}}
            />
          </div>
        </div>
        <div className={Style.brand_box_right}>
          <img src={images.test_img} alt='brand logo' width={800} height={600}/>
        </div>
      </div>
    </div>
  )
}

export default Brand