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
import ProductsSectionTwo from "./ProductSectionTwo/ProductSectionTwo";
import PromotionBannerThree from "./PromotionBannerThree/PromotionBannerThree";
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
      {/* Product Section 2 */}
      <Container>
        <ProductsSectionTwo />
      </Container>
      {/* Promotion Banner Three */}
      <Container>
        <PromotionBannerThree />
      </Container>
    </div>
  );
};

export default Home;
