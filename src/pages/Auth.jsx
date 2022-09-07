import React from "react";
import AuthComponent from "../components/Auth/AuthComponent";
import Footer from "../components/Footer/Footer";
import MainNavbar from "../components/Navigations/MainNavbar";

const Auth = () => {
  return (
    <div>
      <MainNavbar />
      <AuthComponent />
      <Footer />
    </div>
  );
};

export default Auth;
