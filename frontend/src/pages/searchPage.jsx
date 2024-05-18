import React, { useEffect, useState } from "react";
import axios from "axios"; // Add missing import statement

//Internal Import
import Style from "../styles/searchPage.module.css";
import { Slider, Brand } from "../components/componentsindex";
import { SearchBar } from "../searchPage/searchBarIndex";
import { Filter } from "../components/componentsindex";
import { NFTCardTwo, Banner } from "../collectionPage/collectionindex";
import images from "../img/index";

const SearchPage = () => {
  const [dataArray, setDataArray] = useState([]);
  const [searchContent, setSearchContent] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/nfts");
        console.log(res.data.data.nfts);
        setDataArray(res.data.data.nfts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const collectionArray = [
    images.test_img,
    images.test_img_2,
    images.test_img_3,
    images.test_img,
    images.test_img_2,
    images.test_img_3,
    images.test_img,
    images.test_img_2,
    images.test_img_3,
  ];

  const filteredNFTData = dataArray.filter((el) =>
    el.name.toLowerCase().includes(searchContent.toLowerCase())
  );
  return (
    <div className={Style.searchBar}>
      <Banner bannerImage={images.test_img_3} />
      <SearchBar
        searchContent={searchContent}
        setSearchContent={setSearchContent}
      />
      {filteredNFTData.length <= 0 || searchContent === "" ? (
        <div className={Style.searchBar_box_content}>
          <h1>There is no valid NFT. Search another NFT.</h1>
        </div>
      ) : (
        <NFTCardTwo NFTData={filteredNFTData} />
      )}

      <Slider />
      <Brand />
    </div>
  );
};

export default SearchPage;
