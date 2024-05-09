import React from "react";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex";
import NFTDetailsPage from "../nftDetailsPage/NFTDetailsPage";

const NFTDetails = () => {
  return (
    <div>
      <NFTDetailsPage/>
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;
