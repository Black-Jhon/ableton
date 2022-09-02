import React from "react";
import MoreOption from "./MoreOption";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const MainNavbar = () => {
  return (
    <>
      <div className="flex justify-between mx-12 mt-5">
        <div className="left">
          <div className="flex gap-7 font-bold capitalize">
            <Link to="/">
              <img src={logo} alt="" className="font-bold" />
            </Link>

            <div className="flex gap-10 mt-2">
              <p className="hidden lg:block">live</p>
              <p className="hidden lg:block">push</p>
              <p className="hidden lg:block">link</p>
              <p className="hidden lg:block">shop</p>
              <p className="hidden lg:block">packs</p>
              <p className="hidden lg:block">help</p>
              <MoreOption />
            </div>
          </div>
        </div>

        <div className="right font-bold flex mt-2 gap-5">
          <p className="capitalize text-[#2971ff] whitespace-nowrap hidden lg:block">try live for free</p>
          <p className="whitespace-nowrap text-xs mt-1 hidden lg:block">
            <Link to="auth">Log in or register</Link>
          </p>
        </div>
      </div>
      <hr className="text-gray-900 my-5" />
    </>
  );
};

export default MainNavbar;
