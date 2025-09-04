import React from "react";
import Container from "../../components/Container/Container";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import "./ForgetPassword.css";
const ForgetPassword = () => {
  return (
    <Container>
      <Link className="goBack" to={"/login"}>
        <FaArrowLeft /> Go Back
      </Link>
      <section id="login" style={{ alignItems: "start" }}>
        <div className="loginContainer">
          <h4>Forgot password?</h4>
          <form>
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Phone Number/Email"
            />
            <button>Send OTP</button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default ForgetPassword;
