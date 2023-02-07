import React from "react";
import styled from "styled-components";

const Team = () => {
  return (
    <Container>
      <div className="header">
        <p className="head">
          Our skillfull <span>team</span>.
        </p>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          nobis, aliquid consectetur dolorem illum at dolorum vitae possimus
          corrupti qua corporis adipisci
        </p>
      </div>
      <div className="team">
        <div className="member">
          <div className="profile"></div>
          <p className="name">Steve Smith</p>
          <p className="role">Android developer</p>
        </div>
        <div className="member">
          <div className="profile"></div>
          <p className="name">Steve Smith</p>
          <p className="role">Android developer</p>
        </div>
        <div className="member">
          <div className="profile"></div>
          <p className="name">Steve Smith</p>
          <p className="role">Android developer</p>
        </div>
        <div className="member">
          <div className="profile"></div>
          <p className="name">Steve Smith</p>
          <p className="role">Android developer</p>
        </div>
        <div className="member">
          <div className="profile"></div>
          <p className="name">Steve Smith</p>
          <p className="role">Android developer</p>
        </div>
        <div className="member">
          <div className="profile"></div>
          <p className="name">Steve Smith</p>
          <p className="role">Android developer</p>
        </div>
        <div className="member">
          <div className="profile"></div>
          <p className="name">Steve Smith</p>
          <p className="role">Android developer</p>
        </div>
        <div className="member">
          <div className="profile"></div>
          <p className="name">Steve Smith</p>
          <p className="role">Android developer</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  align-items: center;
  background: var(--white);

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
      font-weight: 700;
      text-align: center;
      color: var(--black);

      span {
        color: var(--bright);
      }
    }
  }

  .team {
    width: 100%;
    height: auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 20px;
    justify-content: center;

    .member {
      width: 300px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .profile {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: var(--gray);
      }

      p.name {
        margin: 15px 0 10px 0;
        font-weight: 700;
      }
    }
  }
`;

export default Team;
