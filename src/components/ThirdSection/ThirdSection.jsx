import React from "react";
import left from "../../assets/images/thirdTwo.webp";
import right from "../../assets/images/ThirdOne.webp";

const ThirdSection = () => {
  return (
    <div>
      <div className="flex lg:ml-32 mr-0 mx-2 relative mb-32">
        <div className="leftImage lg:w-[60rem] absolute">
          <img src={left} alt="" className="lg:h-[47rem] lg:w-[45rem] object-cover lg:mt-32" />
        </div>

        <div className="rightImage lg:w-[60rem] lg:h-[65rem] bg-[#FBFFA7] lg:ml-[35rem]">
          <img src={right} alt="" className="lg:w-[35rem] lg:h-[25rem] object-cover lg:mt-72 lg:ml-60" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
