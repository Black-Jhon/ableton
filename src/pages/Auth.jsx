import React from "react";
import AuthComponent from "../components/Auth/AuthComponent";
import Footer from "../components/Footer/Footer";
import MainNavbar from "../components/Navigations/MainNavbar";
import SmallNavbar from "../components/Navigations/SmallNavbar";

const Auth = () => {
  return (
    <div>
      <MainNavbar />
      <SmallNavbar />
      <AuthComponent />
      <Footer />
    </div>
  );
};

export default Auth;
