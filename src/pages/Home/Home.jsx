import React from "react";
import "./Home.css";
import Container from "../../components/Container/Container";
import HomeCategory from "./HomeCategory/HomeCategory";
import Banner from "./Banner/Banner";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Trending from "./Trending/Trending";
import PromotionBanner from "./PromotionBanner/PromotionBanner";
import ProductsSectionOne from "./ProductsSectionOne/ProductsSectionOne";
import PromotionBannerTwo from "./PromotionBannerTwo/PromotionBannerTwo";
const Home = () => {
  // This is home page
  return (
    <div>
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
      {/* Promotion Banner */}
      <PromotionBanner />
      {/* Product section one*/}
      <Container>
        <ProductsSectionOne />
      </Container>
      {/* Promotion banner 2 */}
      <Container>
        <PromotionBannerTwo />
      </Container>
    </div>
  );
};

export default Home;
