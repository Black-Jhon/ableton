import React from "react";
import seven from "../../assets/images/seven.jpg";
import { BiChevronRight } from "react-icons/bi";

const SeventhSection = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-2 lg:mx-32 my-40">
        <div className="">
          <img src={seven} className="h-[40rem] object-cover" alt="" />
        </div>

        <div className="bg-[#b1c5ff] h-[40rem] flex justify-center items-center">
          <div className="grid gap-5">
            <div className="w-[25rem] text-xl tracking-wider leading-loose font-bold font-mono">
              We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.
            </div>

            <div className="flex items-center gap-5 text-[#0000ff] cursor-pointer">
              <h1 className="font-bold font-mono">See latest jobs </h1>
              <BiChevronRight className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-900 my-40" />
    </div>
  );
};

export default SeventhSection;
