import React, {useEffect} from "react";

//Internal Import
import { NFTDescription, NFTDetailsImg, NFTTabs } from "./NFTDetailsIndex";
import Style from "./NFTDetailsPage.module.css";

const NFTDetailsPage = ({nft}) => {
  // console.log('====================================');
  // console.log(nft);
  // console.log('====================================');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTDetailsImg nft={nft}/>
        <NFTDescription resNFT = {nft}/>
      </div>
    </div>
  );
};

export default NFTDetailsPage;
