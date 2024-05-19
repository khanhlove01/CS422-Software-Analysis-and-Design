import React from "react";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex";
import NFTDetailsPage from "../nftDetailsPage/NFTDetailsPage";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const NFTDetails = () => {
  const { id } = useParams();
  const [nft, setNft] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/nfts/${id}`)
      .then((res) => {
        setNft(res.data.data.nft);
        console.log(res.data.data.nft);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;
