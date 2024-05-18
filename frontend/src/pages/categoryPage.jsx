import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


// Internal Import
import Style from "../styles/categoryPage.module.css";
import { Banner, CollectionProfile } from "../collectionPage/collectionindex";
import { NFTCardTwo } from "../collectionPage/collectionindex";
import { GiConsoleController } from "react-icons/gi";

const CategoryPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const collections = {
    forest: {
      bannerImage:
        "https://pbs.twimg.com/media/FyqXPJkaAAAVG56?format=jpg&name=4096x4096",
        profileImage: "https://pbs.twimg.com/media/FyqXPJkaAAAVG56?format=jpg&name=4096x4096",
      collectionArray: [
        "https://pbs.twimg.com/media/GJ_bZMDasAAQ26H?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GHa18RLagAATUZE?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/F-psYRvbkAA8G-9?format=jpg&name=4096x4096",
      ],
    },
    sky: {
      bannerImage:
        "https://pbs.twimg.com/media/EFhnhYcVUAA42I0?format=jpg&name=4096x4096",
        profileImage: "https://pbs.twimg.com/media/EFhnhYcVUAA42I0?format=jpg&name=4096x4096",
      collectionArray: [
        "https://pbs.twimg.com/media/GDUMIUMb0AA7rXO?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GDUMLDgbYAA3nJu?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/FamYHYLUsAIOJdT?format=jpg&name=4096x4096",
      ],
    },
    sea: {
      bannerImage:
        "https://pbs.twimg.com/media/GCfHyvCaUAAODgW?format=jpg&name=4096x4096",
        profileImage: "https://pbs.twimg.com/media/GCfHyvCaUAAODgW?format=jpg&name=4096x4096",
      collectionArray: [
        "https://pbs.twimg.com/media/E-6_nIuVkAMu-63?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/EaoHQGwU4AAVUGp?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/EkXceLkVoAE368U?format=jpg&name=4096x4096",
      ],
    },
    player: {
      bannerImage:
        "https://pbs.twimg.com/media/GNN87D1b0AAjMkv?format=jpg&name=4096x4096",
    profileImage: "https://pbs.twimg.com/media/GNN87D1b0AAjMkv?format=jpg&name=4096x4096",
      collectionArray: [
        "https://pbs.twimg.com/media/GMJBZ0_a4AAVb4T?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GLHyzbUaoAAqMuT?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GLSDfy5awAADuJD?format=jpg&name=4096x4096",
      ],
    },
  };

  console.log(id);
  const selectedCollection = collections[id] || collections.forest;

  return (
    <div className={Style.categoryPage}>
      <Banner bannerImage={selectedCollection.bannerImage} />
      <CollectionProfile profileImage={selectedCollection.profileImage}/>
      <NFTCardTwo NFTData={selectedCollection.collectionArray} />
    </div>
  );
};

export default CategoryPage;
