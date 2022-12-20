import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <Container>
      <div className="logo">
        <p>Logo</p>
      </div>
      <div className="links">
        <Link to="about">About Us</Link>
        <Link to="faqs">FAQs</Link>
        <Link to="contact">Contact Us</Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;

    p {
      font-size: 1.2em;
      font-weight: 700;
    }
  }

  .links {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      text-decoration: none;
      color: var(--black);
      margin: 0 0 0 30px;
      font-size: 1em;
    }
  }
`;

export default Top;
