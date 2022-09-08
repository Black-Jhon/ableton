import React from "react";
import left from "../../assets/images/thirdTwo.jpg";
import right from "../../assets/images/ThirdOne.jpg";

const ThirdSection = () => {
  return (
    <div className="lg:my-24 my-10 lg:ml-32 flex relative">
      <div className="absolute lg:max-w-[40rem] md:max-w-[23rem] max-w-[10rem] lg:left-0 left-8 lg:top-28 top-10">
        <img src={left} className="object-cover" alt="" />
      </div>

      <div className="bg-[#fbffa7] max-w-[70%] lg:h-[43rem] md:h-80 h-48 ml-[30%]">
        <div className="max-w-[50%] lg:mt-40 md:mt-20 mt-12 lg:ml-96 md:ml-52 ml-24">
          <img src={right} className="object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
