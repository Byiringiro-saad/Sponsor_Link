import React from "react";
import styled from "styled-components";

const Hero = (props) => {
  return (
    <Container>
      <div className="one">
        <img src="/images/one.png" alt="one" />
      </div>
      <div className="two">
        <img src="/images/two.png" alt="two" />
      </div>
      {props.children}
      <div className="three">
        <img src="/images/three.png" alt="three" />
      </div>
      <div className="four">
        <img src="/images/four.png" alt="four" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .one {
    position: absolute;
    top: 30px;
    left: 30px;
  }

  .two {
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .three {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }

  .four {
    position: absolute;
    bottom: 30px;
    left: 30px;
  }
`;

export default Hero;
