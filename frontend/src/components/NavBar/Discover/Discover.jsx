import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Discover.module.css";

const Discover = () => {
  const navigate = useNavigate();

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
      name: "Account Setting",
      link: "account",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Featured NFTs",
      link: "feature-NFTs",
    }
  ];

  const handleNavigation = (link) => {
    navigate(`/${link}`);
  };

  return (
    <div>
      {discover.map((item, index) => (
        <div key={index + 1} className={Style.discover}>
          <a onClick={() => handleNavigation(item.link)}>{item.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Discover;
