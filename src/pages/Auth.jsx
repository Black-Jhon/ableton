import React from "react";
import AuthComponent from "../components/Auth/AuthComponent";
import Footer from "../components/Footer/Footer";
import MainNavbar from "../components/Navigations/MainNavbar";
import SmallNavbar from "../components/Navigations/SmallNavbar";

const Auth = () => {
  return (
    <div>
      <MainNavbar />
      <div className="top-0 sticky">
        <SmallNavbar />
        <AuthComponent />
        <Footer />
      </div>
    </div>
  );
};

export default Auth;
