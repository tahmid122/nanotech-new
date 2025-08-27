import React from "react";
import "./ProductDetails.css";
import Container from "../../components/Container/Container";
import ProductDetailsNav from "./ProductDetailsNav/ProductDetailsNav";
const ProductDetails = () => {
  return (
    <Container>
      <section id="productDetails">
        <ProductDetailsNav />
      </section>
    </Container>
  );
};

export default ProductDetails;
