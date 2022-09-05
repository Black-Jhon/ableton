import React from "react";
import left from "../../assets/images/thirdTwo.jpg";
import right from "../../assets/images/ThirdOne.jpg";

const ThirdSection = () => {
  return (
    <div className="my-24 lg:ml-32 flex relative">
      <div className="absolute max-w-[40rem] top-28">
        <img src={left} className="object-cover" alt="" />
      </div>

      <div className="bg-[#fbffa7] max-w-[70%] h-[43rem] ml-[30%]">
        <div className="max-w-[50%] lg:mt-40 lg:ml-96">
          <img src={right} className="object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
