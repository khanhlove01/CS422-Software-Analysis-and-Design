import React from 'react'

//Internal Import
import Style from "../styles/uploadNFTPage.module.css"
import {UploadNFT} from "../uploadNFT/uploadNFTIndex.jsx"

const UploadNFTPage = () => {
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>

        <div className={Style.uploadNFT_box_title}>
          <h2>Image, Video, Audio, or 3D Model</h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
        </div>

        <div className={Style.uploadNFT_box_form}>
          {/* <UploadNFT uploadToIPFS={uploadToIPFS} createNFT={createNFT} /> */}
          <UploadNFT/>
        </div>
      </div>
    </div>
  );
}

export default UploadNFTPage