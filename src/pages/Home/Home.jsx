import React from "react";
import "./Home.css";
import Container from "../../components/Container/Container";
import HomeCategory from "./HomeCategory/HomeCategory";
import Banner from "./Banner/Banner";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Trending from "./Trending/Trending";
const Home = () => {
  // This is home page
  return (
    <Container>
      {/* Home category */}
      <HomeCategory />
      {/* Banner section */}
      <Banner />
      {/* Why Choose us section */}
      <WhyChooseUs />
      {/* Trending Section */}
      <Trending />
    </Container>
  );
};

export default Home;
