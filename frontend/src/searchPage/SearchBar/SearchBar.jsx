import React, { useEffect, useState } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./SearchBar.module.css";

const SearchBar = ({ searchContent, setSearchContent }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchContent(e.target.value);
    }
  };
  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input
          type="text"
          placeholder="Type your keyword..."
          // onChange={(e) => setSearchContent(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <BsArrowRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  )
}

export default SearchBar