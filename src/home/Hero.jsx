import React from "react";

const Hero = () => {
  return (
    <div>
      {" "}
      <div className="mainpage">
        <div className="relative w-full">
          <div className="container">
            <div className="my-36 md:mb-28 md:mt-72">
              <h1 className="text-5xl leading-[4rem] text-[#CCCCCC] md:text-[80px] md:leading-[6rem]">
                Experience the <br />{" "}
                <span className="animate-text  bg-gradient-to-r from-[#EF7A76]  to-[#F6D794] bg-clip-text text-transparent">
                  Future of Collecting
                </span>
              </h1>
              <div className="mt-10 flex flex-wrap items-center gap-20">
                <h1 className="outlined-text font-roboto text-5xl !font-black md:text-[8rem]">
                  NFTs 2.0
                </h1>

                <a
                  href="/"
                  className="font-roboto rounded-full border-2 border-[#cccccc] px-6 py-3 text-[#cccccc] duration-500 hover:underline md:px-10 md:py-5 md:text-2xl  "
                >
                  Let's Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
