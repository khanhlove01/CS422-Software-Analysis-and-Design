import React from 'react'

//Internal Import
import Style from "../styles/searchPage.module.css";
import { Slider, Brand} from "../components/componentsindex";
import { SearchBar } from "../searchPage/searchBarIndex";
import { Filter } from "../components/componentsindex";
import { NFTCardTwo, Banner } from "../collectionPage/collectionindex";

import images from "../img/index"

const SearchPage = () => {
  return (
    <div className={Style.searchBar}>
      <Banner/>
      <Filter/>
      <SearchBar/>
      <Slider/>
      <Brand/>
    </div>
  )
}

export default SearchPage;