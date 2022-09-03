import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import MoreOption from "./MoreOption";

const MainNavbar = () => {
  return (
    <>
      <div className="flex justify-between lg:mx-12 mx-2 mt-5">
        <div className="left">
          <div className="flex gap-7 font-bold capitalize">
            <Link to="/">
              <img src={logo} alt="" className="font-bold" />
            </Link>

            <div className="flex gap-10 mt-2">
              <p className="hidden lg:block cursor-pointer font-mono">live</p>
              <p className="hidden lg:block cursor-pointer font-mono">push</p>
              <p className="hidden lg:block cursor-pointer font-mono">link</p>
              <p className="hidden lg:block cursor-pointer font-mono">shop</p>
              <p className="hidden lg:block cursor-pointer font-mono">packs</p>
              <p className="hidden lg:block cursor-pointer font-mono">help</p>
              <MoreOption />
            </div>
          </div>
        </div>

        <div className="right font-bold flex mt-2 gap-12">
          <p className="capitalize text-[#2971ff] whitespace-nowrap hidden lg:block font-mono">try live for free</p>
          <p className="whitespace-nowrap text-xs mt-1 hidden lg:block">
            <Link to="auth" className="font-mono">
              Log in or register
            </Link>
          </p>
        </div>
      </div>
      <hr className="text-gray-200 mt-3" />
    </>
  );
};

export default MainNavbar;
