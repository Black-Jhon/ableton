import React from "react";
import heroImage from "../../assets/images/studioOne.jpg";
import HeroDescription from "./HeroDescription";

const HeroSection = () => {
  return (
    <div className="lg:mx-32">
      <div className="relative">
        <img src={heroImage} alt="" className="w-full object-cover h-[48rem]" />
        <span className="absolute text-9xl lg:top-[20rem] lg:right-[26%]  capitalize text-[#fd5948] font-bold font-mono">ableton</span>
      </div>

      <div>
        <HeroDescription />
      </div>
    </div>
  );
};

export default HeroSection;
