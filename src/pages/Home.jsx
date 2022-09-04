import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import MainNavbar from "../components/Navigations/MainNavbar";
import SmallNavbar from "../components/Navigations/SmallNavbar";
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
      </div>
    </div>
  );
};

export default Home;
