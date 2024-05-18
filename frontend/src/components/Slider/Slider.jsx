import React, { useState, useEffect, useRef } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
//Internal Import
import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
//Image import
import images from "../../img/index"
import axios from "axios";

const Slider = () => {
  const [arrayImage,setArrayImage] = useState(null);
  const [current, setCurrent] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  // console.log('====================================');
  // console.log(current.token);
  // console.log('====================================');
  const fetchSlider = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/nfts", {
        headers: {
          Authorization: `Bearer ${current.token}`
        }
      });
      console.log(response.data.data.nfts);
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }
  useEffect(() => {
    fetchSlider();
  }, []);

  const sliderArray = [{
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
  },];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  });

  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };



  return (
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        <h2>Explore NFTs Video</h2>
        <div className={Style.slider_box_button}>
          <p>Click on play icon & enjoy Nfts Video</p>
          <div className={Style.slider_box_button_btn}>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        <motion.div className={Style.slider_box_items} ref={dragSlider}>
          <motion.div
            ref={dragSlider}
            className={Style.slider_box_item}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {sliderArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
