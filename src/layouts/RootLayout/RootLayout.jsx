import React from "react";
import "./RootLayout.css";
import { Outlet } from "react-router";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";

const RootLayout = () => {
  return (
    // Root Layout
    <div>
      <div className="bothNavbar">
        <Container>
          <TopNavbar />
        </Container>
      </div>
      <MainNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
