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
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
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
