import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../../assets/images/studioOne.jpg";
import HeroDescription from "./HeroDescription";

AOS.init();

const HeroSection = () => {
  return (
    <div className="lg:mx-32">
      <div className="relative">
        <img src={heroImage} alt="" className="w-full object-cover h-[48rem]" />
        <span
          className="absolute lg:text-9xl md:text-6xl text-5xl lg:top-[20rem] top-80 lg:right-[26%] md:right-72 right-20  capitalize text-[#fd5948] font-bold font-mono">ableton</span>
      </div>

      <div>
        <HeroDescription />
      </div>
    </div>
  );
};

export default HeroSection;
