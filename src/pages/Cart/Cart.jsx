import React, { useEffect } from "react";
import "./Cart.css";
import { useNavigate } from "react-router";
import Container from "../../components/Container/Container";
const Cart = () => {
  const navigate = useNavigate();
  const isLoggedIn = true;
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  return (
    <Container>
      <section id="cart">This is cart page. Under development</section>
    </Container>
  );
};

export default Cart;
