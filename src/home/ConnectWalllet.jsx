import React from "react";
import Video from "../assets/video/gif.mp4";
import Logo from "../assets/icons/logo-sc.webp";
// Import CSS file for styling

const ConnectWallet = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    padding: "0px",
  };

  return (
    <div className="connect-wallet">
      <div className="top-left-image"></div>
      <div className="bottom-right-image"></div>

      <div className="container flex flex-col items-center justify-center p-4 sm:h-screen">
        <h1 className="Get-Alien-Clubs text-center uppercase">
          Get Your Alien
        </h1>

        <div className="mint-page mt-5 ">
          <div className="mint-section grid max-w-3xl grid-cols-1 overflow-hidden sm:grid-cols-2">
            <div className="image-wrapper">
              <div style={containerStyle}>
                <video
                  src={Video}
                  preload="auto"
                  autoPlay
                  controls
                  loop
                  style={containerStyle}
                ></video>
              </div>
            </div>

            <div className="text-column flex flex-col items-center justify-center gap-5 bg-black/50 p-10 backdrop-blur-sm">
              <p className="text-center text-xl leading-[1.2rem] tracking-[2px] text-white">
                420AlienClubs grants ownership and commercial usage rights given
                to the owner over their NFT and exclusive membership to future
                projects.
              </p>

              <div className="item-center flex w-full justify-center">
                <a href="#mint" className="no-style">
                  <button className="button-64">
                    <span className="text">Connect Wallet</span>
                  </button>
                </a>
              </div>

              <div className="inset-shadow-md bg-green-900 px-2 py-1 text-center font-genos font-medium text-white shadow-inner">
                Mint Price: 0.25 ETH
              </div>
            </div>

            <span className="snakeq"></span>
            <span className="snakew"></span>
            <span className="snakee"></span>
            <span className="snaker"></span>
          </div>
        </div>

        <img src={Logo} alt="" className="mx-auto mt-2 max-w-[140px]" />
      </div>
    </div>
  );
};

export default ConnectWallet;
