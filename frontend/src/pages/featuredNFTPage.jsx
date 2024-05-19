import React, { useState } from "react";
import { NFTCard, Title } from "../components/componentsindex";
import { useEffect } from "react";
//Internal Import
import Style from "../styles/featuredNFTPage.module.css";
import { Banner } from "../collectionPage/collectionindex";
import img from "../img";

const FeaturedNFTPage = () => {
  
  const [feature, setFeature] = useState(null);

  const handleButtonClick = (text) => {
    setFeature(text);
  };

  const handleApplyClick = () =>{
    //Change the NFT below
    setFeature(null);
  }

  //Call api
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/nfts");
        setDataArray(res.data.data.nfts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
            <button
              className={feature === "Forest" ? Style.active : null}
              onClick={() => handleButtonClick("Forest")}
            >
              Forest
            </button>
            <button
              className={feature === "Sea" ? Style.active : null}
              onClick={() => handleButtonClick("Sea")}
            >
              Sea
            </button>
            <button
              className={feature === "Sky" ? Style.active : null}
              onClick={() => handleButtonClick("Sky")}
            >
              Sky
            </button>
            <button
              className={feature === "Player" ? Style.active : null}
              onClick={() => handleButtonClick("Player")}
            >
              Player
            </button>
          </div>
          <div className={Style.FeaturedNFTPage_box_tag_apply}>
            <button onClick={()=>handleApplyClick()}>Apply</button>
          </div>
        </div>
        <div>
          <NFTCard />
        </div>
      </div>
    </div>
  );
};

export default FeaturedNFTPage;
