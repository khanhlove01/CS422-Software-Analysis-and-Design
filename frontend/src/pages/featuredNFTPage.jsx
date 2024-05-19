import React, { useState, useEffect } from "react";
import { NFTCard, Title } from "../components/componentsindex";
import axios from 'axios';
//Internal Import
import Style from "../styles/featuredNFTPage.module.css";
import { Banner } from "../collectionPage/collectionindex";
import img from "../img";

const FeaturedNFTPage = () => {
  const [features, setFeatures] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [filteredDataArray, setFilteredDataArray] = useState([]);
  const handleButtonClick = (text) => {
    setFeatures((prevFeatures) => {
      if (prevFeatures.includes(text)) {
        // Move the clicked feature to the beginning of the array
        return [text, ...prevFeatures.filter((feature) => feature !== text)];
      } else {
        // Add the new feature to the beginning of the array
        return [text, ...prevFeatures];
      }
    });
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/nfts");
      setDataArray(res.data.data.nfts);
      console.log('====================================');
      console.log(res.data.data.nfts);
      console.log('====================================');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredDataArray(
      dataArray.filter((nft) =>
        features.length === 0 || features.includes(nft.elemental)
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
          {/* <div className={Style.FeaturedNFTPage_box_tag_apply}>
            <button onClick={handleApplyClick}>Apply</button>
          </div> */}
        </div>
        <div>
          <NFTCard filteredDataArray={filteredDataArray}/>
          {/* {filteredDataArray.map((nft, index) => (
            <NFTCard key={index} nft={nft} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNFTPage;
