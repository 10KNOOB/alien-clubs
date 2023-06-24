import React from "react";
import { BsSuitClub } from "react-icons/bs";

const RoadMapC = () => {
  return (
    <div className="roadmap-items mx-auto max-w-5xl">
      <div className="roadmap-item">
        <div className="item-label max-sm:hidden">PHASΞ 1</div>
        <div className="item-content-wrapper one">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="item-title"
          >
            4200 ALPHA MALE ALIEN IDENTITY
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="item-content"
          >
            <ul className="list-disc">
              <li>Alien Awareness</li>
              <li>Alien mint (alienclub website)</li>
              <li>Public sales</li>
              <li>Alien Reveals</li>
              <li>
                <span className="flex gap-2">
                  {" "}
                  Alien Space clubs <BsSuitClub size={13} className="mt-2" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="roadmap-item">
        <div className="item-label  max-sm:hidden">PHASΞ 2</div>
        <div className="item-content-wrapper two">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="item-title"
          >
            ALIENATE
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="item-content "
          >
            <ul className="list-disc">
              <li>Alien Awareness </li>
              <li>Arrivals of the Female Alien Species</li>
              <li>
                Member-Exclusive Alienclub Merch Store unlocked, Limited Edition
                tees, hoodies, and other goodies.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="roadmap-item">
        <div className="item-label  max-sm:hidden">PHASΞ 3</div>
        <div className="item-content-wrapper three">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="item-title "
          >
            THE ALIEN PARTY
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="item-content"
          >
            <span className="font-size">
              Owning a male and female alien automatically gives you a free baby
              Alien. All ideals of baby aliens would be drafted from the
              community which would be implemented to give astonishing benefits
              to both the idealist and community.
            </span>
          </div>
        </div>
      </div>

      <div className="roadmap-item">
        <div className="item-label  max-sm:hidden">PHASΞ 4</div>
        <div className="item-content-wrapper four">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="item-title"
          >
            GIFT &amp; REWARDS
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="item-content"
          >
            <ul className="list-disc">
              <li>
                All Alien babies will be airdropped to holders of alpha and beta
                aliens.
              </li>
              <li>
                50% revenues generated would be used in the mass development of
                web3/Ai space at the Alien-Lab
              </li>
              <li>
                Hiring part time/full time/contract
                <ul className="padding-left">
                  <li>Cartoonist/animator</li>
                  <li>Social manager</li>
                  <li>Marketing agents</li>
                  <li>Software engineers</li>
                  <li>Illustrators</li>
                </ul>
              </li>
              <li>
                All Alienclub members will exclusively have an acess to all
                future events, apps, products and services generated at the
                Alien Lab
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapC;
