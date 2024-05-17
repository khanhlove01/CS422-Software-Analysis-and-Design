import React from "react";
import { Link } from "react-router-dom";
import Style from "./Discover.module.css";

const Discover = () => {
  // Discover menu
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search-page",
    },
    {
      name: "Author Profile",
      link: "author",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
  ];
  return (
    <div>
      {discover.map((item, index) => (
        <div key={index + 1} className={Style.discover}>
          <a href={`${item.link}`}>{item.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Discover;
