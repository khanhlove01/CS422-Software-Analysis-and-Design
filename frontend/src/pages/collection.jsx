import React, { useState, useEffect, useRef } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

// Internal Import
import Style from "../styles/collection.module.css";
import images from "../img/index";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../collectionPage/collectionindex";
import { Slider, Brand } from "../components/componentsindex";
import SliderCard from "../components/Slider/SliderCard/SliderCard";

const Collection = () => {
  const collectionArray = [
    images.test_img,
    images.test_img_2,
    images.test_img,
    images.test_img_2,
    images.test_img,
    images.test_img_2,
    images.test_img,
    images.test_img_2,
  ];

  const [difficulty, setDifficulty] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [ratingScore, setRatingScore] = useState(null);
  const [ratingQuantity, setRatingQuantity] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSelect = (dropdown, value) => {
    switch (dropdown) {
      case "difficulty":
        setDifficulty(value);
        break;
      case "sortBy":
        setSortBy(value);
        break;
      case "ratingScore":
        setRatingScore(value);
        break;
      case "ratingQuantity":
        setRatingQuantity(value);
        break;
      default:
        break;
    }
    setOpenDropdown(null);
  };

  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.test_img_2} />
      <CollectionProfile />

      <div className={Style.collection_box}>
        <div className={Style.collection_box_tag}>
          <div className={Style.collection_box_tag_selection} ref={dropdownRef}>
            {/* Difficulty Dropdown */}
            <div className={Style.dropdown}>
              <button onClick={() => handleDropdownClick("difficulty")}>
                Difficulty: {difficulty ? difficulty : "Select"}
                {openDropdown === "difficulty" ? (
                  <TiArrowSortedUp />
                ) : (
                  <TiArrowSortedDown />
                )}
              </button>
              {openDropdown === "difficulty" && (
                <ul className={Style.dropdown_menu}>
                  
                  <li onClick={() => handleSelect("difficulty", "Easy")}>
                    Easy
                  </li>
                  <li onClick={() => handleSelect("difficulty", "Medium")}>
                    Medium
                  </li>
                  <li onClick={() => handleSelect("difficulty", "Hard")}>
                    Hard
                  </li>
                  <li onClick={() => handleSelect("difficulty", null)}>None</li>
                </ul>
              )}
            </div>
            {/* Sort By Dropdown */}
            <div className={Style.dropdown}>
              <button onClick={() => handleDropdownClick("sortBy")}>
                Sort By: {sortBy ? sortBy : "Select"}
                {openDropdown === "sortBy" ? (
                  <TiArrowSortedUp />
                ) : (
                  <TiArrowSortedDown />
                )}
              </button>
              {openDropdown === "sortBy" && (
                <ul className={Style.dropdown_menu}>
                 
                  <li
                    onClick={() =>
                      handleSelect("sortBy", "By Price (Low to High)")
                    }
                  >
                    By Price (Low to High)
                  </li>
                  <li
                    onClick={() =>
                      handleSelect("sortBy", "By Price (High to Low)")
                    }
                  >
                    By Price (High to Low)
                  </li>
                  <li onClick={() => handleSelect("sortBy", "By Name (A - Z)")}>
                    By Name (A - Z)
                  </li>
                  <li onClick={() => handleSelect("sortBy", "By Name (Z - A)")}>
                    By Name (Z - A)
                  </li>
                  <li onClick={() => handleSelect("sortBy", null)}>None</li>
                </ul>
              )}
            </div>
            {/* Rating Score Dropdown */}
            <div className={Style.dropdown}>
              <button onClick={() => handleDropdownClick("ratingScore")}>
                Rating Score: {ratingScore ? ratingScore : "Select"}
                {openDropdown === "ratingScore" ? (
                  <TiArrowSortedUp />
                ) : (
                  <TiArrowSortedDown />
                )}
              </button>
              {openDropdown === "ratingScore" && (
                <ul className={Style.dropdown_menu}>
                  
                  <li
                    onClick={() => handleSelect("ratingScore", "Higher than 3")}
                  >
                    Higher than 3
                  </li>
                  <li
                    onClick={() => handleSelect("ratingScore", "Higher than 4")}
                  >
                    Higher than 4
                  </li>
                  <li
                    onClick={() => handleSelect("ratingScore", "Higher than 5")}
                  >
                    Higher than 5
                  </li>
                  <li onClick={() => handleSelect("ratingScore", null)}>
                    None
                  </li>
                </ul>
              )}
            </div>
            {/* Rating Quantity Dropdown */}
            <div className={Style.dropdown}>
              <button onClick={() => handleDropdownClick("ratingQuantity")}>
                Rating Quantity: {ratingQuantity ? ratingQuantity : "Select"}
                {openDropdown === "ratingQuantity" ? (
                  <TiArrowSortedUp />
                ) : (
                  <TiArrowSortedDown />
                )}
              </button>
              {openDropdown === "ratingQuantity" && (
                <ul className={Style.dropdown_menu}>
                  
                  <li
                    onClick={() =>
                      handleSelect("ratingQuantity", "Higher than 10")
                    }
                  >
                    Higher than 10
                  </li>
                  <li
                    onClick={() =>
                      handleSelect("ratingQuantity", "Higher than 50")
                    }
                  >
                    Higher than 50
                  </li>
                  <li
                    onClick={() =>
                      handleSelect("ratingQuantity", "Higher than 100")
                    }
                  >
                    Higher than 100
                  </li>
                  <li onClick={() => handleSelect("ratingQuantity", null)}>
                    None
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className={Style.collection_box_tag_apply}>
            <button>Apply</button>
          </div>
        </div>
        <div className={Style.collection_box_content}>
          {collectionArray.map((el, i) => (
            <SliderCard key={i + 1} el={el} i={i} />
          ))}
        </div>
      </div>

      {/* <NFTCardTwo NFTData={collectionArray} /> */}
    </div>
  );
};

export default Collection;
