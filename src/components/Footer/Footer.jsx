// @ts-nocheck
import React, { useMemo, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="lg:mx-32 mx-10 md:w-[85%] w-[60%] lg:my-40 my-10">
      <div className="grid lg:gap-24 gap-10">
        <h1 className="font-bold text-5xl font-mono">Ableton</h1>

        {/* Top */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <div className="grid gap-2 text-sm">
            <div className="flex items-center gap-1 cursor-pointer">
              <h1 className="font-mono whitespace-nowrap">Register Live or Push </h1>
              <BiChevronRight className="text-xl" />
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <h1 className="font-mono">About Ableton </h1>
              <BiChevronRight className="text-xl" />
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <h1 className="font-mono">Jobs </h1>
              <BiChevronRight className="text-xl" />
            </div>

            <div className="flex items-center text-2xl gap-2">
              <div className="bg-[#3477f2] px-1 py-1 text-white cursor-pointer">
                <BsFacebook />
              </div>

              <div className="bg-[#1da1f2] px-1 py-1 text-white cursor-pointer">
                <BsTwitter />
              </div>

              <div className="bg-[#ff001d] px-1 py-1 text-white cursor-pointer">
                <BsYoutube />
              </div>

              <div className="bg-[#f77737] px-1 py-1 text-white cursor-pointer">
                <BsInstagram />
              </div>
            </div>
          </div>

          <div className="grid text-sm">
            <h1 className="font-bold">Education</h1>

            <div className="grid gap-2 whitespace-nowrap">
              <div className="flex items-center gap-1 cursor-pointer">
                <h1 className="font-mono">Offers for students and teachers </h1>
                <BiChevronRight className="text-xl" />
              </div>

              <div className="flex items-center gap-1 cursor-pointer">
                <h1 className="font-mono">Ableton for the classroom </h1>
                <BiChevronRight className="text-xl" />
              </div>

              <div className="flex items-center gap-1 cursor-pointer">
                <h1 className="font-mono">Ableton for Colleges and Universities </h1>
                <BiChevronRight className="text-xl" />
              </div>
            </div>
          </div>

          <div className="text-sm grid gap-2">
            <h1 className="font-mono font-bold">Ableton Sign up to our newsletter</h1>
            <p className="font-mono flex flex-wrap">Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
            <div className="whitespace-nowrap">
              <input type="text" className="w-64 focus:outline-none px-3 py-2 bg-[#eeeeee] mt-3" placeholder="Email Address" />
              <button className="bg-[#0000ff] capitalize px-3 py-2 border-none lg:w-28 text-white font-bold">sign up</button>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <div className="grid gap-2 text-sm">
            <h1 className="font-bold">Community</h1>

            <div className="grid gap-2 whitespace-nowrap">
              <div className="flex items-center gap-1 cursor-pointer">
                <h1 className="font-mono">Find Ableton User Groups </h1>
                <BiChevronRight className="text-xl" />
              </div>

              <div className="flex items-center gap-1 cursor-pointer">
                <h1 className="font-mono">Find Certified Training </h1>
                <BiChevronRight className="text-xl" />
              </div>

              <div className="flex items-center gap-1 cursor-pointer">
                <h1 className="font-mono">Become a Certified Trainer </h1>
                <BiChevronRight className="text-xl" />
              </div>
            </div>
          </div>

          <div className="middle">
            <div className="grid gap-2 text-sm">
              <h1 className="font-bold">Community</h1>

              <div className="grid gap-2 whitespace-nowrap">
                <div className="flex items-center gap-1 cursor-pointer">
                  <h1 className="font-mono">Find Distributors </h1>
                  <BiChevronRight className="text-xl" />
                </div>

                <div className="flex items-center gap-1 cursor-pointer">
                  <h1 className="font-mono">Try Push in-store </h1>
                  <BiChevronRight className="text-xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="font-bold font-mono mb-1">Language and Location</h1>

            <div className="flex items-center">
              <Select options={options} value={value} onChange={changeHandler} />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[33%]">
          <div className="flex items-center lg:flex-auto flex-wrap gap-3 whitespace-nowrap">
            <span className="font-bold font-mono text-xs capitalize">contact us</span>
            <span className="font-bold font-mono text-xs capitalize">press resources</span>
            <span className="font-bold font-mono text-xs capitalize">legal info</span>
            <span className="font-bold font-mono text-xs capitalize">cookie settings</span>
            <span className="font-bold font-mono text-xs capitalize">imprint</span>
          </div>

          <div className="flex items-center gap-2 mb-10">
            <h1 className="capitalize">made in nigeria</h1>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
