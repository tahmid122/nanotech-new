import React, { useEffect } from "react";
import "./Cart.css";
import { Link, useNavigate } from "react-router";
import Container from "../../components/Container/Container";
import SalesPointCart from "./SalesPointCart/SalesPointCart";
import UserCart from "./UserCart/UserCart";
import useCart from "../../hooks/useCart";
import Navigation from "../../components/Navigation/Navigation";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
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
        {cartItems?.length == 0 ? (
          <div className="emptyCartPlaceholder">
            <div className="emptyCartPlaceholderMain">
              <MdOutlineRemoveShoppingCart
                size={80}
                color="gray"
                opacity={0.5}
              />
              <h4> Cart is empty!</h4>
              <p>
                Add your desired products to cart and come back to this page to
                checkout.
              </p>
              <Link to={"/"}>Continue Shopping</Link>
            </div>
          </div>
        ) : (
          <> {salesPoint ? <SalesPointCart /> : <UserCart />}</>
        )}
      </section>
    </Container>
  );
};

export default Cart;
