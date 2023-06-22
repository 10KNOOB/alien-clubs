import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const links = [
    {
      id: 1,
      link: "Wave",
    },
    {
      id: 2,
      link: "Kardz",
    },
    {
      id: 3,
      link: "Team",
    },
  ];

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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div
        className={
          shadow
            ? "fixed z-[100] flex h-[100px] w-full items-center text-white shadow-lg backdrop-blur-xl duration-300"
            : "fixed z-[100] flex h-[100px] w-full items-center duration-300 "
        }
      >
        {/* this is for large screen devices */}
        <div className="container  flex h-[70px] items-center justify-between ">
          <div className="font-twist flex  animate-text items-center bg-gradient-to-r from-[#F79413] via-[#627EEA] to-[#F08484] bg-clip-text text-5xl tracking-tighter text-transparent lg:w-2/6">
            <NavLink to="/">DWOPE</NavLink>
          </div>

          <div className="flex flex-row items-center justify-center gap-5 text-white max-lg:hidden lg:w-2/5 xl:gap-10">
            <nav className="cursor-pointer text-lg text-[#F79413] duration-200 hover:scale-110">
              <NavLink to="/dwoobx" duration={500}>
                X
              </NavLink>
            </nav>
            <nav className="cursor-pointer text-lg text-[#627EEA]  duration-200 hover:scale-110">
              <NavLink to="" duration={500}>
                Y
              </NavLink>
            </nav>
            <nav className="cursor-pointer text-lg text-[#F08484]  duration-200 hover:scale-110">
              <NavLink to="" duration={500}>
                Z
              </NavLink>
            </nav>

            {links.map(({ id, link }) => (
              <nav
                key={id}
                className="cursor-pointer  text-lg  duration-200 hover:scale-110"
              >
                <NavLink to={link} duration={500}>
                  {link}
                </NavLink>
              </nav>
            ))}
          </div>

          <div className="flex flex-row items-center justify-end  gap-5  text-white max-lg:hidden lg:w-2/6">
            {socialLinks.map(({ id, link }) => (
              <nav
                key={id}
                className="cursor-pointer  rounded-full border-2 border-white  px-4 py-1 text-xl duration-200 hover:scale-110"
              >
                <NavLink to="" duration={500}>
                  {link}
                </NavLink>
              </nav>
            ))}
          </div>

          <div
            onClick={handleNav}
            className="block text-lg text-white lg:hidden"
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      {/* this is for small screen devices */}

      <div
        className={
          nav
            ? "fixed left-0 top-0 z-40 flex h-screen w-[80%] text-black backdrop-blur-lg duration-500 ease-in lg:hidden"
            : "fixed left-[-100%] top-0 z-40 h-screen w-[80%] backdrop-blur-2xl duration-500 ease-in"
        }
      >
        <ul className="mt-20">
          <nav className="mx-4 my-4 cursor-pointer text-lg text-[#F79413] duration-200 hover:scale-110">
            <NavLink to="" duration={500}>
              X
            </NavLink>
          </nav>
          <nav className="mx-4 my-4 cursor-pointer text-lg text-[#627EEA]  duration-200 hover:scale-110">
            <NavLink to="" duration={500}>
              Y
            </NavLink>
          </nav>
          <nav className="mx-4 my-4 cursor-pointer text-lg text-[#F08484]  duration-200 hover:scale-110">
            <NavLink to="" duration={500}>
              Z
            </NavLink>
          </nav>
          {links.map(({ id, link }) => (
            <nav
              key={id}
              className="mx-4 my-4 cursor-pointer capitalize text-white"
            >
              <NavLink onClick={() => setNav(!nav)} to={link} duration={500}>
                {link}
              </NavLink>
            </nav>
          ))}
          <div className="mx-4 flex flex-row items-center  justify-end  gap-5 text-white">
            {socialLinks.map(({ id, link }) => (
              <nav
                key={id}
                className="cursor-pointer  rounded-full border-2 border-white  px-4 py-1 text-xl duration-200 hover:scale-110"
              >
                <NavLink to="" duration={500}>
                  {link}
                </NavLink>
              </nav>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
