import React from "react";
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      link: <FaDiscord />,
    },
    {
      id: 2,
      link: <FaYoutube />,
    },
    {
      id: 3,
      link: <FaTwitter />,
    },
  ];

  return (
    <div className="  bg-[#232323]">
      <div className=" container">
        <div className="flex flex-col items-center justify-around gap-10 py-20 text-[#cccccc] sm:flex-row">
          <h3 className="text-xl">Terms Of Use</h3>
          <div className="">
            <h1 className="font-twist text-5xl">DWOPE</h1>
            <div className="mt-5 flex justify-between">
              {socialLinks.map(({ id, link }) => (
                <nav
                  key={id}
                  className=" cursor-pointer rounded-full border-2 border-white  px-4 py-1 text-xl duration-200 hover:scale-110"
                >
                  <a
                    href="/dwada"
                    duration={500}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link}
                  </a>
                </nav>
              ))}
            </div>
          </div>
          <h3 className="text-xl">Privacy Policy</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
