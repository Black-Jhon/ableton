import React from "react";
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpg";

const FourthSection = () => {
  return (
    <div className="my-24 lg:mr-32 flex relative">
      <div className="bg-[#B6FFC0]" style={{ width: "65%" }}>
        <div className="grid gap-32">
          <img src={one} className="w-[30rem] h-[20rem] object-cover lg:ml-28 mt-32" alt="" />
          <img src={two} className="w-[30rem] h-[20rem] object-cover lg:ml-28 mb-32" alt="" />
        </div>
      </div>

      <div className="w-[40rem] top-72 absolute lg:ml-[55%]">
        <img src={three} className="" alt="" />
      </div>
    </div>
  );
};

export default FourthSection;
