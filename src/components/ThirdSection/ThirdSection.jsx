import React from "react";
import left from "../../assets/images/thirdTwo.webp";
import right from "../../assets/images/ThirdOne.webp";

const ThirdSection = () => {
  return (
    <div>
      <div className="flex lg:ml-32 mr-0 mx-2 relative mb-32">
        <div className="leftImage">
          <img src={left} alt="" className="lg:h-[47rem] lg:w-[50%] absolute mr-20 object-cover lg:mt-32" />
        </div>

        <div className="rightImage thirdSectionRight lg:h-[65rem] bg-[#FBFFA7] lg:ml-[35rem]">
          <img src={right} alt="" className="object-cover lg:mt-72 lg:w-[60%] lg:ml-[33%]" style={{}} />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
