import React from "react";

const AboutDwope = () => {
  return (
    <div className="blueBg">
      <div className="container">
        <h1 className="py-20 text-5xl text-[#cccccc] md:text-7xl">
          About{" "}
          <span className="animate-text  bg-gradient-to-r from-[#EF7A76]  to-[#F6D794] bg-clip-text text-transparent">
            DWOPE
          </span>
        </h1>

        <div class="container mx-auto flex flex-col items-center pb-20 md:flex-row">
          <div class="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <div className="relative my-5 flex justify-center">
              <h3 className="animate-text bg-gradient-to-r  from-[#EF7A76] to-[#F6D794]  bg-clip-text text-3xl text-transparent">
                Cheetah Baby
              </h3>
              <h3 className="absolute top-0 animate-text bg-gradient-to-r  from-[#EF7A76] to-[#F6D794]  bg-clip-text text-4xl text-transparent blur">
                Cheetah Baby
              </h3>
            </div>
          </div>
          <div class="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <p class="mb-8 max-w-xl leading-relaxed text-[#cccccc]">
              Hijacking the DreamWave for her amusement, Cheetah Baby has
              collided the DreamWorld into the blockchain and tangled it with a
              Dream Seed that’s too big and too complicated to unravel. Every
              character has become mixed and mashed in a sea of powerful ideas
              and spells. Whirling and twirling with no escape in sight.
              Corrupting the very core of the Save Crystal, which backs up all
              data. Even though The DreamWorld seems to always be one step away
              from destruction by dragons, demons, aliens, robots, mythical
              creatures, and people gaining immense power from an energy known
              as eXp, it doesn’t matter, because our heroes, their allies, and
              its citizens always find a way! <br />
              <span className="text-2xl text-[#FFC700]">
                But wait, why are our heroes ducks?
              </span>
              <br />
              Oh no… and Apes..Dear god and Dogs.. <br />
              <span className="text-2xl text-[#FFC700]">
                {" "}
                If this has all been amalgamated, can it be saved?{" "}
              </span>
              <br />
              Well, there is a common currency, that many know of as “DEED” in
              the DreamWorld, that is in the bleed of all this mess right now.
              It seems to have mixed with something in the blockchain, making it
              stronger and more valuable. Even during such a chaotic time, the
              planet is secreting it. Does It want to be saved? No, The
              DreamWorld wants to rescue its inhabitants from the cosmic games
              of Cheetah Baby! This will be the currency that keeps this fever
              dream from cementing. It is the cure! With this, many new
              adventures are waiting to be found in this new world! There is
              hope!
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="container">
          <div className="my-28 flex w-full flex-col items-center justify-around gap-10 text-[#cccccc] md:flex-row">
            <div>
              <h3 className="text-5xl md:text-6xl">
                Hosted{" "}
                <span className="animate-text  bg-gradient-to-r from-[#EF7A76]  to-[#F6D794] bg-clip-text  text-transparent">
                  By
                </span>
              </h3>
            </div>
            <div>
              <h3 className="text-5xl md:text-6xl">
                Powered{" "}
                <span className="animate-text  bg-gradient-to-r from-[#EF7A76]  to-[#F6D794] bg-clip-text  text-transparent">
                  By
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDwope;
