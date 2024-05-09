import React from 'react'

//Internal Import
import Style from "../styles/searchPage.module.css";
import { Slider, Brand} from "../components/componentsindex";
import { SearchBar } from "../searchPage/searchBarIndex";
import { Filter } from "../components/componentsindex";
import { NFTCardTwo, Banner } from "../collectionPage/collectionindex";

import images from "../img/index"

const SearchPage = () => {
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