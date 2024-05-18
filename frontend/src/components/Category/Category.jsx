import React from "react";
import { BsCircleFill } from "react-icons/bs";

//Internal Import
import Style from "./Category.module.css";

//Image Import
import images from "../../img/index";

const Category = () => {
  const CategoryArray = [
    {
      name: "Forest",
      background: "https://pbs.twimg.com/media/F7M422yboAATxqv?format=jpg&name=4096x4096",
      user: images.test_img,
    },
    {
      name: "Sea",
      background: "https://pbs.twimg.com/media/EaoHPeMUcAMNsm4?format=jpg&name=4096x4096",
      user: images.test_img_2,
    },
    {
      name: "Player",
      background: "https://pbs.twimg.com/media/GGdn7hRbQAAlcqo?format=jpg&name=4096x4096",
      user: images.test_img,
    },
    {
      name: "Sky",
      background: "https://pbs.twimg.com/media/GDUM5NTagAA3u2l?format=jpg&name=4096x4096",
      user: images.test_img,
    },
  ];
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
                <h4>{el.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
