import React from "react";
import "./ProductDetails.css";
import Container from "../../components/Container/Container";
import ProductDetailsMain from "./ProductDetailsMain/ProductDetailsMain";
import ProductInDetail from "./ProductInDetail/ProductInDetail";
import Navigation from "../../components/Navigation/Navigation";
const ProductDetails = () => {
  return (
    <Container>
      <section id="productDetails">
        {/* Nav */}
        <Navigation
          title={"Walton Inverter AC 1.5 Ton"}
          links={[
            { label: "Home", href: "/" },
            { label: "Air Conditioner", href: "/" },
            { label: "Split AC", href: "/" },
          ]}
        />
        {/* Product Details main/intro */}
        <ProductDetailsMain />
      </section>
    </Container>
  );
};

export default ProductDetails;
