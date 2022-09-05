import React from "react";
import FifthSection from "../components/FifithSection/FifthSection";
import FourthSection from "../components/FourthSection/FourthSection";
import HeroSection from "../components/HeroSection/HeroSection";
import MainNavbar from "../components/Navigations/MainNavbar";
import SmallNavbar from "../components/Navigations/SmallNavbar";
import SixthSection from "../components/SixthSection/SixthSection";
import ThirdSection from "../components/ThirdSection/ThirdSection";
import VideoSection from "../components/VideoSection/VideoSection";

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <div className="top-0 sticky">
        <SmallNavbar />
        <HeroSection />
        <ThirdSection />
        <VideoSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
      </div>
    </div>
  );
};

export default Home;
