import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const MoreOption = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(!opened);
  };

  return (
    <div className="hidden lg:block w-40">
      <div className="grid" onClick={handleOpen}>
        <div className="cursor-pointer flex items-center gap-2">
          <span className="text-[#ff764d]">more</span> {opened ? <AiOutlineMinus className="text-[#ff764d]" /> : <AiOutlinePlus className="text-[#ff764d]" />}
        </div>
        {opened && (
          <div className="my-10">
            {/* Top */}
            <div className="">
              <h1 className="text-xl">More on Ableton.com:</h1>
              <div className="md:flex gap-5 capitalize font-thin mt-5 text-sm">
                <p className="cursor-pointer whitespace-nowrap">blog</p>
                <p className="cursor-pointer whitespace-nowrap">ableton for the classroom</p>
                <p className="cursor-pointer whitespace-nowrap">ableton for colleges and universities</p>
                <p className="cursor-pointer whitespace-nowrap">certified training</p>
                <p className="cursor-pointer whitespace-nowrap text-[#ff764d]">about ableton</p>
                <p className="cursor-pointer whitespace-nowrap">jobs</p>
                <p className="cursor-pointer whitespace-nowrap">apprenticeships</p>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 text-xl">
              <h1>More from Ableton:</h1>
              <div className="flex gap-16 my-5">
                <div className="grid">
                  <p className="text-base">Loop</p>
                  <p className="font-thin text-sm">Watch Talks, Performances and Features from Ableton's Summit for Music Makers</p>
                </div>

                <div className="grid">
                  <p className="text-base">Learning Music</p>
                  <p className="font-thin text-sm">Learn the fundamentals of music making right in your browser.</p>
                </div>

                <div className="grid">
                  <p className="text-base">Learning Synths</p>
                  <p className="font-thin text-sm">Get started with synthesis using a web-based synth and accompanying lessons.</p>
                </div>

                <div className="grid">
                  <p className="text-base">Making Music</p>
                  <p className="font-thin text-sm">Some tips from 74 Creative Strategies for Electronic Producers.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreOption;
