import React from "react";
import NftSlider from "./NftSlider";

const NftCollection = () => {
  return (
    <div className="relative w-full" id="about">
      <div className="container">
        <div className="mt-20 ">
          <h1 className="Alien-Clubs text-center">Alien Clubs</h1>
        </div>

        <NftSlider />

        <p className="mx-auto max-w-6xl py-5 text-center text-xl leading-[1.2rem] tracking-[2px] text-white">
          Alienclubs NFT is a collection of unique Alien digital identities that
          gurantees you exclusive access to future artworks, content, connection
          and Club membership. also grants access to members-only benefits, the
          first of which is access to THE SPACE, the next phase of alien future
          and domination.
        </p>

        <div className="item-center flex w-full justify-center">
          <a href="#mint" className="no-style">
            <button className="button-64">
              <span className="text">Mint Now!</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NftCollection;
