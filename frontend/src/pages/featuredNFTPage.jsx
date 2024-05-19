import React, { useState, useEffect,useRef } from "react";
import { NFTCard, Title } from "../components/componentsindex";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import axios from "axios";
//Internal Import
import Style from "../styles/featuredNFTPage.module.css";
import { Banner } from "../collectionPage/collectionindex";
import img from "../img";

const FeaturedNFTPage = () => {
  const [features, setFeatures] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [filteredDataArray, setFilteredDataArray] = useState([]);

  const [difficulty, setDifficulty] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [ratingScore, setRatingScore] = useState(null);
  const [ratingQuantity, setRatingQuantity] = useState(null);
  const [price, setPrice] = useState(null);
  const [duration, setDuration] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [linkCallAPI, setLinkCallAPI] = useState("http://localhost:3000/api/v1/nfts/top-5-nfts");
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

  const handleSelect = (dropdown, value,title) => {
    switch (dropdown) {
      case "difficulty":
        setDifficulty({ value: value,title:title });
        break;
      case "sortBy":
        setSortBy({value:value,title:title});
        break;
      case "ratingScore":
        setRatingScore({value:value,title:title});
        break;
      case "ratingQuantity":
        setRatingQuantity({value:value,title:title});
        break;
      default:
        break;
    }
    setOpenDropdown(null);
  };

  const handleButtonClick = (text) => {
    setFeatures((prevFeatures) => {
      if (prevFeatures.includes(text)) {
        // Remove the feature if it's already selected
        return prevFeatures.filter((feature) => feature !== text);
      } else {
        // Add the new feature to the beginning of the array
        return [text, ...prevFeatures];
      }
    });
  };

  const constructApiUrl = () => {
    let apiUrl = "http://localhost:3000/api/v1/nfts/top-5-nfts?";
    if (difficulty) apiUrl += `difficulty=${difficulty.value}&`;
    if (sortBy) apiUrl += `sort=${sortBy.value}&`;
    if (price) apiUrl += `price[gt]=${price}&`;
    if (duration) apiUrl += `duration[gte]=${duration}&`;
    if (ratingScore) apiUrl += `ratingsAverage[gt]=${ratingScore.value}&`;
    if (ratingQuantity) apiUrl += `ratingsQuantity[gt]=${ratingQuantity.value}&`;
    // Remove trailing '&' if it exists
    apiUrl = apiUrl.endsWith("&") ? apiUrl.slice(0, -1) : apiUrl;
    console.log('====================================');
    console.log(apiUrl);
    console.log('====================================');
    return apiUrl;
  };
  

  const fetchData = async () => {
    try {
      const apiUrl = constructApiUrl();
      const res = await axios.get(apiUrl);
      setDataArray(res.data.data.nfts);
      console.log("====================================");
      console.log(res.data.data.nfts);
      console.log("====================================");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [difficulty, sortBy, price, duration, ratingScore, ratingQuantity]);  

  useEffect(() => {
    setFilteredDataArray(
      dataArray.filter(
        (nft) => features.length === 0 || features.includes(nft.elemental)
      )
    );
    console.log("Selected features:", features);
    console.log("Filtered data array:", filteredDataArray);
  }, [features, dataArray]);

  // const handleApplyClick = () => {
  //   // This function can be used to trigger any specific actions when apply is clicked
  //   console.log("Selected features:", features);
  // };
  // const filteredDataArray = dataArray.filter(nft =>
  //   features.length === 0 || features.includes(nft.elemental)
  // );

  return (
    <div className={Style.FeaturedNFTPage}>
      <Banner bannerImage={img.test_img_2} />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <div className={Style.FeaturedNFTPage_box}>
        <div className={Style.FeaturedNFTPage_box_tag}>
          <div className={Style.FeaturedNFTPage_box_tag_container}>
          <div className={Style.FeaturedNFTPage_box_tag_selection}>
            {["Forest", "Sea", "Sky", "Player"].map((feature) => (
              <button
                key={feature}
                className={features.includes(feature) ? Style.active : null}
                onClick={() => handleButtonClick(feature)}
              >
                {feature}
              </button>
            ))}
          </div>
          <div className={Style.FeaturedNFTPage_box_tag_selection} ref={dropdownRef}>
            {/* Difficulty Dropdown */}
            <div className={Style.dropdown}>
              <button onClick={() => handleDropdownClick("difficulty")}>
                Difficulty: {difficulty ? difficulty.title : "Select"}
                {openDropdown === "difficulty" ? (
                  <TiArrowSortedUp />
                ) : (
                  <TiArrowSortedDown />
                )}
              </button>
              {openDropdown === "difficulty" && (
                <ul className={Style.dropdown_menu}>
                  <li onClick={() => handleSelect("difficulty", "easy", "Easy")}>
                    Easy
                  </li>
                  <li onClick={() => handleSelect("difficulty", "medium", "Medium")}>
                    Medium
                  </li>
                  <li onClick={() => handleSelect("difficulty", "difficult", "Difficult")}>
                    Hard
                  </li>
                  <li onClick={() => handleSelect("difficulty", null, "None")}>None</li>
                </ul>
              )}
            </div>
            {/* Sort By Dropdown */}
            <div className={Style.dropdown}>
              <button onClick={() => handleDropdownClick("sortBy")}>
                Sort By: {sortBy ? sortBy.title : "Select"}
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
                      handleSelect("sortBy", "price", "By Price Low to High")
                    }
                  >
                    By Price (Low to High)
                  </li>
                  <li
                    onClick={() =>
                      handleSelect("sortBy", "-price", "By Price High to Low")
                    }
                  >
                    By Price (High to Low)
                  </li>
                  <li onClick={() => handleSelect("sortBy", "name", "By Name (A - Z)")}>
                    By Name (A - Z)
                  </li>
                  <li onClick={() => handleSelect("sortBy", "-name", "By Name (Z - A)")}>
                    By Name (Z - A)
                  </li>
                  <li onClick={() => handleSelect("sortBy", null, "None")}>None</li>
                </ul>
              )}
            </div>
            {/* Rating Score Dropdown */}
            <div className={Style.dropdown}>
              <button onClick={() => handleDropdownClick("ratingScore")}>
                Rating Score: {ratingScore ? ratingScore.title : "Select"}
                {openDropdown === "ratingScore" ? (
                  <TiArrowSortedUp />
                ) : (
                  <TiArrowSortedDown />
                )}
              </button>
              {openDropdown === "ratingScore" && (
                <ul className={Style.dropdown_menu}>
                  <li
                    onClick={() => handleSelect("ratingScore", "3","Higher than 3")}
                  >
                    Higher than 3
                  </li>
                  <li
                    onClick={() => handleSelect("ratingScore", "4","Higher than 4")}
                  >
                    Higher than 4
                  </li>
                  <li
                    onClick={() => handleSelect("ratingScore", "4.5","Higher than 4.5")}
                  >
                    Higher than 4.5
                  </li>
                  <li onClick={() => handleSelect("ratingScore", null, "None")}>
                    None
                  </li>
                </ul>
              )}
            </div>
            {/* Rating Quantity Dropdown */}
            <div className={Style.dropdown}>
              <button onClick={() => handleDropdownClick("ratingQuantity")}>
                Rating Quantity: {ratingQuantity ? ratingQuantity.title : "Select"}
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
                      handleSelect("ratingQuantity", "10","Higher than 10")
                    }
                  >
                    Higher than 10
                  </li>
                  <li
                    onClick={() =>
                      handleSelect("ratingQuantity", "50","Higher than 50")
                    }
                  >
                    Higher than 50
                  </li>
                  <li
                    onClick={() =>
                      handleSelect("ratingQuantity", "100","Higher than 100")
                    }
                  >
                    Higher than 100
                  </li>
                  <li onClick={() => handleSelect("ratingQuantity", null,"None")}>
                    None
                  </li>
                </ul>
              )}
            </div>
          </div>
          </div>
          
          {/* <div className={Style.FeaturedNFTPage_box_tag_apply}>
            <button onClick={handleApplyClick}>Apply</button>
          </div> */}
        </div>
        <div>
          <NFTCard filteredDataArray={filteredDataArray} />
          {/* {filteredDataArray.map((nft, index) => (
            <NFTCard key={index} nft={nft} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNFTPage;
