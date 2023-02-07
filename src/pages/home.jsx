import React from "react";
import styled from "styled-components";

//components
import Us from "../components/home/us";
import Hero from "../components/home/hero";
import Team from "../components/home/team";
import People from "../components/home/people";
import Press from "../components/home/press";

const Home = () => {
  return (
    <Container>
      <Hero>
        <div className="content">
          <p className="header">
            Find your dream <br /> collaboration <span>here</span>.
          </p>
          <p className="para">
            The strength of the team is each individual member, let’s find you
            worthy teammates.
          </p>
          <button>Get started</button>
        </div>
      </Hero>
      <People />
      <Us />
      <Team />
      <Press />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;

    p.header {
      font-size: 3em;
      font-weight: 700;
      text-align: center;
      color: var(--black);
      margin: 0 0 20px 0;

      span {
        color: var(--bright);
      }
    }

    p.para {
      text-align: center;
      margin: 0 0 20px 0;
    }

    button {
      width: 250px;
      height: 35px;
      border-radius: 5px;
      border: none;
      background: var(--bright);
      color: var(--white);
      align-self: center;
    }
  }
`;

export default Home;
