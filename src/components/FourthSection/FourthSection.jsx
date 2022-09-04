import React from "react";
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpg";

const FourthSection = () => {
  return (
    <div className="my-24 lg:mr-32 flex relative">
      <div className="bg-[#B6FFC0] w-[65%]">
        <div className="grid gap-32 max-w-[50%] h-[80%] object-cover lg:ml-32 ">
          <img src={one} className="mt-32" alt="" />
          <img src={two} className="mb-40" alt="" />
        </div>
      </div>

      <div className="max-w-[40rem] top-72 absolute lg:ml-[55%]">
        <img src={three} className="" alt="" />
      </div>
    </div>
  );
};

export default FourthSection;
