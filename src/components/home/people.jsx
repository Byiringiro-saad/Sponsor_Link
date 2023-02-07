import React from "react";
import styled from "styled-components";

//icons
import { FaUserTie } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { RiUserVoiceFill } from "react-icons/ri";

const People = () => {
  return (
    <Container>
      <div className="header">
        <p className="head">
          The kind of <span>people</span> we help.
        </p>
        <p className="para">You can join the platform as:</p>
      </div>
      <div className="container">
        <div className="box">
          <BsBuilding className="icon" />
          <p className="title">Business</p>
          <p className="para">
            Are you a business looking for professionals you can work with!?
          </p>
          <button>Join now</button>
        </div>
        <div className="box shadow">
          <RiUserVoiceFill className="icon" />
          <p className="title">Influencer</p>
          <p className="para">
            Are you an influencer looking for a business or other professionals
            you can work with!?
          </p>
          <button>Join now</button>
        </div>
        <div className="box">
          <FaUserTie className="icon" />
          <p className="title">Individual</p>
          <p className="para">
            Are you an individual looking for a business or other professionals
            you can work with!?
          </p>
          <button>Join now</button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

  .container {
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;

    .shadow {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    .box {
      width: 350px;
      height: 280px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background: var(--white);
      border-radius: 10px;
      padding: 20px;
      margin: 0 20px;
      transition: 0.5s ease-in-out;

      :hover {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }

      .icon {
        font-size: 3.5em;
        margin: 0 0 15px 0;
      }

      p.title {
        font-size: 2em;
        font-weight: 700;
        color: var(--blue);
        margin: 0 0 15px 0;
      }

      p.para {
        margin: 0 0 15px 0;
      }

      button {
        width: 100%;
        height: 35px;
        border: none;
        color: var(--white);
        border-radius: 5px;
        background: var(--bright);
      }
    }
  }
`;

export default People;
