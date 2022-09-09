import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const MoreOption = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(!opened);
  };

  return (
    <div className="lg:w-[25rem]">
      <div className="grid" onClick={handleOpen}>
        <div className="cursor-pointer flex items-center gap-2">
          <span className="text-[#ff764d]">more</span> {opened ? <AiOutlineMinus className="text-[#ff764d]" /> : <AiOutlinePlus className="text-[#ff764d]" />}
        </div>
        {opened && (
          <div className="md:my-10 lg:w-auto w-[90%]">
            {/* Top */}
            <div className="">
              <h1 className="text-xl font-mono">More on Ableton.com:</h1>
              <div className="lg:flex flex-wrap gap-5 capitalize font-thin md:mt-5 mt-1 text-sm">
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
            <div className="lg:mt-10 mt-2 text-xl">
              <h1>More from Ableton:</h1>
              <div className="lg:flex gap-5 flex-wrap md:my-5 my-1">
                <div className="grid">
                  <p className="text-base font-mono">Loop</p>
                  <p className="font-thin text-sm">Watch Talks, Performances and Features from Ableton's Summit for Music Makers</p>
                </div>

                <div className="grid">
                  <p className="text-base font-mono">Learning Music</p>
                  <p className="font-thin text-sm">Learn the fundamentals of music making right in your browser.</p>
                </div>

                <div className="grid">
                  <p className="text-base font-mono">Learning Synths</p>
                  <p className="font-thin text-sm">Get started with synthesis using a web-based synth and accompanying lessons.</p>
                </div>

                <div className="grid">
                  <p className="text-base font-mono">Making Music</p>
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
