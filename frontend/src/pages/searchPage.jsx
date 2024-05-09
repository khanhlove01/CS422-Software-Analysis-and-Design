import React, { useEffect } from 'react'
import axios from "axios"; // Add missing import statement

//Internal Import
import Style from "../styles/searchPage.module.css";
import { Slider, Brand} from "../components/componentsindex";
import { SearchBar } from "../searchPage/searchBarIndex";
import { Filter } from "../components/componentsindex";
import { NFTCardTwo, Banner } from "../collectionPage/collectionindex";
import images from "../img/index"

const SearchPage = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/nfts");
        console.log(res.data);
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
  ]
  return (
    <div className={Style.searchBar}>
      <Banner bannerImage={images.test_img_3}/>
      <Filter/>
      <SearchBar/>
      <NFTCardTwo NFTData={collectionArray}/>
      <Slider/>
      <Brand/>
    </div>
  )
}

export default SearchPage;