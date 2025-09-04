import React from "react";
import "./SignUp.css";
import Container from "../../components/Container/Container";
import { Link } from "react-router";
const SignUp = () => {
  return (
    <Container>
      <section id="login">
        <div className="loginContainer">
          <h4>Please Sign Up</h4>
          <form>
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Phone Number/Email"
            />
            <input type="password" name="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
          <p>
            Have an account? <Link to={"/login"}>Please Login</Link>
          </p>
        </div>
      </section>
    </Container>
  );
};

export default SignUp;
