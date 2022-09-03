import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import MainNavbar from "../components/Navigations/MainNavbar";
import SmallNavbar from "../components/Navigations/SmallNavbar";

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <div className="top-0 sticky">
        <SmallNavbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
