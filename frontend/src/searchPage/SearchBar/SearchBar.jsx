import React, { useEffect, useState } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./SearchBar.module.css";

const SearchBar = () => {
  const[search, setSearch] = useState(null);

  const handleSearchBar = (e) =>{
    setSearch(e.target.value);
  }

  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input
          type="text"
          placeholder="Type yout keyword..."
          onChange={(e) => handleSearchBar(e)}
          // value={""}
        />
        <BsArrowRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  )
}

export default SearchBar