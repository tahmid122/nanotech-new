import React, { useEffect } from "react";
import "./Cart.css";
import { useNavigate } from "react-router";
import Container from "../../components/Container/Container";
import SalesPointCart from "./SalesPointCart/SalesPointCart";
import UserCart from "./UserCart/UserCart";
const Cart = () => {
  const navigate = useNavigate();
  const isLoggedIn = true;
  const salesPoint = true;
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  return (
    <Container>
      <section id="cart">
        {salesPoint ? <SalesPointCart /> : <UserCart />}
      </section>
    </Container>
  );
};

export default Cart;
