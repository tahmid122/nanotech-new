import React from "react";
import "./RootLayout.css";
import { Outlet } from "react-router";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Container from "../../components/Container/Container";

const RootLayout = () => {
  return (
    // Root Layout
    <div>
      <div className="bothNavbar">
        <Container>
          <TopNavbar />
        </Container>
        <Container>
          <MainNavbar />
        </Container>
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
