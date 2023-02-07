import React from "react";
import { Outlet, useNavigate } from "react-router";
import styled from "styled-components";

//icons
import { GoPrimitiveDot } from "react-icons/go";

const Steps = () => {
  const navigate = useNavigate();

  const goTo = (link) => {
    navigate(link);
  };

  return (
    <Container>
      <div className="header">
        <p className="title">Create a profile</p>
        <div className="progress">
          <div className="one" onClick={() => goTo("/signup/steps/profile")}>
            <div className="circle">
              <GoPrimitiveDot className="icon" />
            </div>
            <p>Profile</p>
          </div>
          <div className="line" />
          <div className="one" onClick={() => goTo("/signup/steps/about")}>
            <div className="circle">
              <GoPrimitiveDot className="icon" />
            </div>
            <p>About you</p>
          </div>
          <div className="one" onClick={() => goTo("/signup/steps/contacts")}>
            <div className="circle">
              <GoPrimitiveDot className="icon" />
            </div>
            <p>Contacts</p>
          </div>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </Container>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;

    p.title {
      font-size: 2.5em;
      line-height: 60px;
      font-weight: 700;
      text-align: center;
      color: var(--black);
    }

    .progress {
      width: 600px;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 40px 0;
      position: relative;

      .line {
        width: calc(100% - 20px);
        height: 5px;
        position: absolute;
        z-index: -1;
        background: var(--bright);
        margin-top: calc((40px / 2) - 2px);
      }

      .one {
        width: auto;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        p {
          margin: 8px 0 0 0;
        }

        .circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bright);

          .icon {
            font-size: 1.2em;
            color: var(--white);
          }
        }
      }
    }
  }

  .content {
    width: 800px;
  }
`;

export default Steps;
