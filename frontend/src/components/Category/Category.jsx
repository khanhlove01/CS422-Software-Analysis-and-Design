import React from "react";
import { BsCircleFill } from "react-icons/bs";

//Internal Import
import Style from "./Category.module.css";

//Image Import
import test_img from "../../img/tmp.png";
import test_img_2 from "../../img/tmp2.jpg";

const Category = () => {
  const CategoryArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className={Style.container_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i + 1}>
            <img
              src={test_img_2}
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
