import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="lg:mx-32 my-40">
      <div className="grid gap-24">
        <h1 className="font-bold text-5xl font-mono">Ableton</h1>

        <div className="lg:flex grid gap-20">
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

            <div className="flex text-2xl gap-2">
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

          <div className="whitespace-nowrap text-sm grid gap-2">
            <h1 className="font-mono font-bold">Ableton Sign up to our newsletter</h1>
            <p className="font-mono">Enter your email address to stay up to date with the latest offers, </p>
            <p className="font-mono">tutorials, downloads, surveys and more.</p>
            <div>
              <input type="text" className="w-96 px-3 py-2 bg-[#eeeeee] mt-3" placeholder="Email Address" />
              <button className="bg-[#0000ff] capitalize px-3 py-2 border-none w-28 text-white font-bold">sign up</button>
            </div>
          </div>
        </div>

        <div className="lg:flex grid gap-10 justify-between">
          <div className="left">left</div>
          <div className="middle">middle</div>
          <div className="right">right</div>
        </div>

        <div className="lg:flex grid gap-10 justify-between">
          <div className="left">left</div>
          <div className="right">right</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
