import React from "react";
import "./RootLayout.css";
import { Outlet, useLocation } from "react-router";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";

const RootLayout = () => {
  const location = useLocation();
  const isLocation =
    location.pathname.split("/").includes("product") ||
    (location.pathname.split("/").includes("shop") &&
      window.innerWidth <= 1200);
  return (
    // Root Layout
    <div style={{ position: "relative" }}>
      <div className="bothNavbar">
        <Container>{isLocation || <TopNavbar />}</Container>
      </div>
      {isLocation || <MainNavbar />}
      <Outlet />
      <Footer />
      {/* Mobile navbar */}
      <MobileNavbar />
    </div>
  );
};

export default RootLayout;
