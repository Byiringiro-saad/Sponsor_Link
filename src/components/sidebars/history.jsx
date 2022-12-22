import React from "react";
import styled from "styled-components";

//icons
import { BiChevronsLeft } from "react-icons/bi";
import { GrAppsRounded } from "react-icons/gr";

const HistorySideBar = () => {
  return (
    <Container>
      <div className="top">
        <BiChevronsLeft className="big" />
      </div>
      <div className="group">
        <div className="row space">
          <div className="title">
            <GrAppsRounded className="icon" />
            <p>Pending</p>
          </div>
          <div className="num">
            <p className="stat">5</p>
          </div>
        </div>
        <div className="row space">
          <div className="title">
            <GrAppsRounded className="icon" />
            <p>Approved</p>
          </div>
          <div className="num">
            <p className="stat">12</p>
          </div>
        </div>
        <div className="row space">
          <div className="title">
            <GrAppsRounded className="icon" />
            <p>Declined</p>
          </div>
          <div className="num">
            <p className="stat">23</p>
            <p className="new">+2</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 500px;
  padding: 10px;
  border-radius: 5px;
  background: var(--white);

  .big {
    font-size: 1.3em;
  }

  .icon {
    font-size: 1.1em;
    margin: 0 7px 0 0;
  }

  .top {
    width: 100%;
    height: 30px;
    padding: 10px 10px 15px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 1px solid var(--gray);
  }

  .group {
    width: 100%;
    height: auto;
    padding: 10px 0 0 0;

    .row {
      width: 100%;
      padding: 0 10px;
      height: 30px;
      border-radius: 5px;
      margin: 5px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;

      :hover {
        background: var(--gray);

        .num {
          .stat {
            background: var(--white);
          }
        }
      }

      .title {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .num {
        width: 50px;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        p {
          font-size: 0.9em;
        }

        .stat {
          width: 30px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          background: var(--gray);
        }

        .new {
          color: var(--bright);
        }
      }
    }
  }

  .active {
    background: var(--gray);
  }

  .space {
    justify-content: space-between !important;
  }
`;

export default HistorySideBar;
