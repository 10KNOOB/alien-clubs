import React from "react";
import RoadMapC from "../components/RoadMapC";

const Roadmap = () => {
  return (
    <div className="moonbg">
      <div className="bottom-left-moon"></div>
      <h1 className="Get-Alien-Clubs text-center uppercase">ROADMAP</h1>
      <p className=" text-center font-genos text-[25px] tracking-[2px] text-[#afe2b1]">
        Alien club is a first of its kind digital identity built for the
        community.
      </p>

      <div className="container my-20 text-white">
        <RoadMapC />
      </div>
    </div>
  );
};

export default Roadmap;
