import React from "react";
import Marquee from "react-fast-marquee";
import { NftData } from "../data/NftData";

const MarqueeNft = () => {
  return (
    <div className="mb-8">
      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        {NftData.map((item) => {
          return (
            <div className="mt-4 flex px-3" key={item.id}>
              <img
                src={item.img}
                alt=""
                className="h-40 w-40 rounded-xl sm:h-60 sm:w-60"
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default MarqueeNft;
