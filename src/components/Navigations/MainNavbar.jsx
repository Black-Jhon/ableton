import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import MoreOption from "./MoreOption";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MainNavbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <div className="flex justify-between lg:mx-12 mx-2 mt-5 relative">
        <div>
          <ul className="flex justify-center gap-10 capitalize font-bold font-mono">
            <li className="cursor-pointer font-mono">
              <Link to="/">
                <img src={logo} alt="" className="font-bold" />
              </Link>
            </li>
            <li className="hidden lg:block cursor-pointer font-mono mt-2">live</li>
            <li className="hidden lg:block cursor-pointer font-mono mt-2">push</li>
            <li className="hidden lg:block cursor-pointer font-mono mt-2">link</li>
            <li className="hidden lg:block cursor-pointer font-mono mt-2">shop</li>
            <li className="hidden lg:block cursor-pointer font-mono mt-2">packs</li>
            <li className="hidden lg:block cursor-pointer font-mono mt-2">help</li>
            <li className="hidden lg:block cursor-pointer font-mono mt-2">
              <MoreOption />
            </li>
          </ul>
        </div>

        <div className="">
          <ul className="right font-bold lg:flex grid lg:mt-2 gap-12">
            <li className="capitalize text-[#2971ff] whitespace-nowrap hidden lg:block font-mono">try live for free</li>
            <li className="whitespace-nowrap text-xs mt-1 hidden lg:block">
              <Link to="auth" className="font-mono">
                Log in or register
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile icon */}
        <div className="lg:hidden flex items-center block cursor-pointer" onClick={handleMobileNav}>
          {mobileNav ? <AiOutlineClose className="text-2xl ease-in-out duration-300" /> : <AiOutlineMenu className="text-2xl ease-in-out duration-300" />}
        </div>

        {/* Mobile Nav */}
        <div
          className={
            mobileNav
              ? "lg:hidden absolute w-screen h-screen -left-2 top-12 capitalize flex-col bg-[#0000ff] text-white z-50 ease-in-out duration-300"
              : "fixed left-[-100%] z-50 ease-in-out duration-300 w-screen h-screen"
          }
        >
          <div>
            <ul className="w-full p-2">
              <li className="block lg:hidden cursor-pointer font-mono md:mt-2 mt-1">live</li>
              <li className="block lg:hidden cursor-pointer font-mono md:mt-2 mt-1">push</li>
              <li className="block lg:hidden cursor-pointer font-mono md:mt-2 mt-1">link</li>
              <li className="block lg:hidden cursor-pointer font-mono md:mt-2 mt-1">shop</li>
              <li className="block lg:hidden cursor-pointer font-mono md:mt-2 mt-1">packs</li>
              <li className="block lg:hidden cursor-pointer font-mono md:mt-2 mt-1">help</li>{" "}
              <li className="block lg:hidden cursor-pointer font-mono md:mt-2 mt-1">
                <MoreOption />
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="w-full p-2">
              <li className="capitalize text-[#2971ff] whitespace-nowrap block lg:hidden font-mono">try live for free</li>
              <li className="whitespace-nowrap text-xs mt-1 block lg:hidden">
                <Link to="auth" className="font-mono">
                  Log in or register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="text-gray-200 mt-3" />
    </>
  );
};

export default MainNavbar;
