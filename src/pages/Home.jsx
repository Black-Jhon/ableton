import React from "react";
import MainNavbar from "../components/MainNavbar";
import SmallNavbar from "../components/SmallNavbar";

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <div className="top-0 sticky">
        <SmallNavbar />
      </div>
    </div>
  );
};

export default Home;
