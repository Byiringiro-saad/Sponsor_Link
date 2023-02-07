import React from "react";
import styled from "styled-components";

const Us = () => {
  return (
    <Container>
      <div className="header">
        <p className="head">
          Who <span>we</span> are.
        </p>
      </div>
      <div className="container">
        <div className="para">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            itaque dolorum aut? Libero molestias maiores aliquam fuga labore
            similique ab autem ullam, quos deserunt odio adipisci? Ad aperiam
            molestias incidunt. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Accusamus illum dolor earum quod incidunt corrupti
            facilis! Aliquid repellendus suscipit non veniam, magni, illo at.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            itaque dolorum aut? Libero molestias maiores aliquam fuga labore
            similique ab autem ullam, quos deserunt odio adipisci? Ad aperiam
            molestias incidunt.
          </p>
        </div>
        <div className="profile">
          <img src="/images/profile.png" alt="profile" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 100%;
    height: auto;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p.head {
      font-size: 2.5em;
      font-weight: 700;
      text-align: center;
      color: var(--black);

      span {
        color: var(--bright);
      }
    }
  }

  .container {
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    .para {
      width: 40%;
      height: 100%;
      padding: 40px 30px;

      p {
        margin: 10px 0 20px 0;
      }
    }

    .profile {
      width: auto;
      height: 100%;
      margin: 0 0 0 50px;
    }
  }
`;

export default Us;
