import React from "react";
import styled from "styled-components";

//components
import Hero from "../../components/home/hero";

//icons
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";

const Signup = () => {
  return (
    <Hero>
      <Container>
        <div className="header">
          <p className="head">Signup to your account</p>
          <p className="para">Find your dream collaboration here!</p>
        </div>
        <div className="form">
          <div className="row">
            <FcGoogle className="icon" />
            <p>Signup with Google</p>
          </div>
          <div className="row">
            <BsFacebook className="facebook icon" />
            <p>Signup with Facebook</p>
          </div>
          <div className="row">
            <BsApple className="apple icon" />
            <p>Signup with Apple Id</p>
          </div>
        </div>
        <div className="signup">
          <div className="or">
            <div className="line"></div>
            <p>Or</p>
            <div className="line"></div>
          </div>
          <p className="account">You already have an account!?</p>
          <div className="button">Login</div>
        </div>
      </Container>
    </Hero>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 100%;
    height: auto;
    margin: 50px 0 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p.head {
      font-size: 2.5em;
      line-height: 60px;
      font-weight: 700;
      text-align: center;
      color: var(--black);

      span {
        color: var(--bright);
      }
    }
  }

  .form {
    width: 400px;
    height: auto;

    .row {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background: #d9d9d9;
      border-radius: 4px;
      margin: 0 0 20px 0;
      cursor: pointer;

      .icon {
        font-size: 1.5em;
        margin: 0 10px 0 0;
      }

      .facebook {
        color: #3b5998;
      }

      .apple {
        color: #66b447;
      }
    }
  }

  .signup {
    width: 400px;
    height: auto;
    margin: 10px 0;

    .or {
      width: 100%;
      height: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .line {
        width: 45%;
        height: 1px;
        background: var(--dark);
      }
    }

    p.account {
      text-align: center;
      line-height: 60px;
      cursor: pointer;
    }

    .button {
      width: 100%;
      height: 50px;
      display: flex;
      border-radius: 5px;
      color: var(--white);
      align-items: center;
      justify-content: center;
      background: var(--bright);
      cursor: pointer;
    }
  }
`;

export default Signup;
