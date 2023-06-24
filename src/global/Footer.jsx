import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiOpensea } from "react-icons/si";
import Logo from "../assets/icons/logo.webp";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      link: <FaTwitter />,
      loc: "https://twitter.com/Alienclubsnft",
    },
    {
      id: 2,
      link: <FaInstagram />,
      loc: "https://www.instagram.com/Alienclubsnft",
    },
    {
      id: 3,
      link: <SiOpensea />,
      loc: "https://opensea.io/collection/alienclubsnft",
    },
  ];

  return (
    <div className=" ">
      <div className=" container mb-16 mt-5 flex w-full flex-col items-center justify-center">
        <div>
          <img src={Logo} alt="" className="-mb-5 max-w-[120px]" />
        </div>
        <h1 className="footer-text   uppercase">BECAME AN ALIEN MEMBER</h1>

        <div className="-mt-5 flex flex-wrap justify-center gap-5 text-[2rem] text-[#cccccc]">
          {socialLinks.map((item) => {
            return (
              <a
                href={item.link}
                key={item.id}
                target="_blank"
                rel="noreferrer"
              >
                {item.link}
              </a>
            );
          })}
        </div>

        <h6 className="mt-2 text-sm text-[#cccccc]">
          © 2023 Alien Clubs - All rights reserved.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
