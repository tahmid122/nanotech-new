import React from "react";
import "./ProductDetails.css";
import Container from "../../components/Container/Container";
import ProductDetailsNav from "./ProductDetailsNav/ProductDetailsNav";
import ProductDetailsMain from "./ProductDetailsMain/ProductDetailsMain";
const ProductDetails = () => {
  return (
    <Container>
      <section id="productDetails">
        {/* Nav */}
        <ProductDetailsNav />
        {/* Product Details main/intro */}
        <ProductDetailsMain />
      </section>
    </Container>
  );
};

export default ProductDetails;
