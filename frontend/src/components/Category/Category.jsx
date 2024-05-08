import React from "react";
import { BsCircleFill } from "react-icons/bs";

//Internal Import
import Style from "./Category.module.css";

//Image Import
import images from "../../img/index"

const Category = () => {
  const CategoryArray = [{
    background: images.test_img_2,
    user: images.test_img,
  },
  {
    background: images.test_img_2,
    user: images.test_img_2,
  },
  {
    background: images.test_img,
    user: images.test_img,
  },
  {
    background: images.test_img_2,
    user: images.test_img,
  },
  {
    background: images.test_img,
    user: images.test_img_2,
  },
  {
    background: images.test_img,
    user: images.test_img,
  },
  {
    background: images.test_img_2,
    user: images.test_img_2,
  },
  {
    background: images.test_img,
    user: images.test_img,
  },];
  return (
    <div className={Style.container_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i + 1}>
            <img
              src={el.background}
              className={Style.category_box_img}
              alt="Background image"
              
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{el.name}</h4>
                <small>{i + 1}995 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
