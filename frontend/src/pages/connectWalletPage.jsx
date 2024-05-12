import React, {useState, useEffect} from 'react'

//Internal Impoer
import Style from "../styles/connectWalletPage.module.css"
import images from "../img/index"

const ConnectWalletPage = () => {
    const [activeBtn, setActiveBtn] = useState(1);
    const providerArray = [
      {
        provider: images.test_img,
        name: "Metamask",
      },
      {
        provider: images.test_img_2,
        name: "walletConnect",
      },
      {
        provider: images.test_img_3,
        name: "walletlink",
      },
      {
        provider: images.test_img,
        name: "Formatic",
      },
    ];
    return (
      <div className={Style.connectWallet}>
        <div className={Style.connectWallet_box}>
          <h1>Connect your wallet</h1>
          <p className={Style.connectWallet_box_para}>
            Connect with one of our avaliabl wallet providers or create a new one
          </p>
  
          <div className={Style.connectWallet_box_provider}>
            {providerArray.map((el, i) => (
              <div
                className={`${Style.connectWallet_box_provider_item} ${
                  activeBtn == i + 1 ? Style.active : ""
                }`}
                key={i + 1}
                onClick={() => (setActiveBtn(i + 1))}
              >
                <img
                  src={el.provider}
                  alt={el.provider}
                  width={50}
                  height={50}
                  className={Style.connectWallet_box_provider_item_img}
                />
                <p>{el.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ConnectWalletPage;