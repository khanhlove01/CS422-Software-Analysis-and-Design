import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Internal Import
import Style from "../styles/categoryPage.module.css";
import { Banner, CollectionProfile, NFTCardTwo } from "../collectionPage/collectionindex";

const CategoryPage = () => {
  const { id } = useParams();
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/nfts");
        setDataArray(res.data.data.nfts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const collections = {
    forest: {
      bannerImage:
        "https://pbs.twimg.com/media/FyqXPJkaAAAVG56?format=jpg&name=4096x4096",
      profileImage:
        "https://pbs.twimg.com/media/FyqXPJkaAAAVG56?format=jpg&name=4096x4096",
      collectionArray: [
        "https://pbs.twimg.com/media/GJ_bZMDasAAQ26H?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GHa18RLagAATUZE?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/F-psYRvbkAA8G-9?format=jpg&name=4096x4096",
      ],
    },
    sky: {
      bannerImage:
        "https://pbs.twimg.com/media/EFhnhYcVUAA42I0?format=jpg&name=4096x4096",
      profileImage:
        "https://pbs.twimg.com/media/EFhnhYcVUAA42I0?format=jpg&name=4096x4096",
      collectionArray: [
        "https://pbs.twimg.com/media/GDUMIUMb0AA7rXO?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GDUMLDgbYAA3nJu?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/FamYHYLUsAIOJdT?format=jpg&name=4096x4096",
      ],
    },
    sea: {
      bannerImage:
        "https://pbs.twimg.com/media/GCfHyvCaUAAODgW?format=jpg&name=4096x4096",
      profileImage:
        "https://pbs.twimg.com/media/GCfHyvCaUAAODgW?format=jpg&name=4096x4096",
      collectionArray: [
        "https://pbs.twimg.com/media/E-6_nIuVkAMu-63?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/EaoHQGwU4AAVUGp?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/EkXceLkVoAE368U?format=jpg&name=4096x4096",
      ],
    },
    player: {
      bannerImage:
        "https://pbs.twimg.com/media/GNN87D1b0AAjMkv?format=jpg&name=4096x4096",
      profileImage:
        "https://pbs.twimg.com/media/GNN87D1b0AAjMkv?format=jpg&name=4096x4096",
      collectionArray: [
        "https://pbs.twimg.com/media/GMJBZ0_a4AAVb4T?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GLHyzbUaoAAqMuT?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GLSDfy5awAADuJD?format=jpg&name=4096x4096",
      ],
    },
  };

  const filteredNFTData = dataArray.filter((el) => el.elemental.toLowerCase() === id);
  const selectedCollection = collections[id] || collections.forest;

  // Use selectedCollection's images as default if filteredNFTData is empty
  const bannerImage = filteredNFTData.length > 0 ? filteredNFTData[0].imageCover : selectedCollection.bannerImage;
  const profileImage = filteredNFTData.length > 0 ? filteredNFTData[0].imageCover : selectedCollection.profileImage;

  return (
    <div className={Style.categoryPage}>
      <Banner bannerImage={bannerImage} />
      <CollectionProfile profileImage={profileImage} />
      <NFTCardTwo NFTData={filteredNFTData} />
    </div>
  );
};

export default CategoryPage;
