import React from "react";
import sixa from "../../assets/images/six.jpg";
import sixb from "../../assets/images/sixb.jpg";

const SixthSection = () => {
  return (
    <div className="my-24 lg:mr-32 flex relative">
      <div className="bg-[#d5b3ff] w-[65%]">
        <div className="grid gap-32 max-w-[50%] h-[80%] object-cover lg:ml-32 mb-32">
          <img src={sixa} className="mt-32" alt="" />
        </div>
      </div>

      <div className="max-w-[40rem] top-72 absolute lg:ml-[55%]">
        <img src={sixb} className="" alt="" />
      </div>
    </div>
  );
};

export default SixthSection;
