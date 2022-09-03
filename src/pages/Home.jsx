import React from "react";
import HeroSection from "../components/HeroSection";
import MainNavbar from "../components/MainNavbar";
import SmallNavbar from "../components/SmallNavbar";

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
