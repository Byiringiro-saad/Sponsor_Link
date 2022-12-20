import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

//icons
import { BiChevronsLeft } from "react-icons/bi";
import { BsCloudCheckFill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineManageSearch,
} from "react-icons/md";

const ListingSideBar = () => {
  //configs
  const location = useLocation();
  const navigate = useNavigate();

  //local data
  const [active, setActive] = React.useState("");

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const goToActive = () => {
    navigate("/listings/active");
  };

  const goToSaved = () => {
    navigate("/listings/saved");
  };

  const goToReported = () => {
    navigate("/listings/reported");
  };

  const goToSearched = () => {
    navigate("/listings/searched");
  };

  return (
    <Container>
      <div className="top">
        <BiChevronsLeft className="big" />
      </div>
      <div className="content">
        <div
          className={active.includes("active") ? "row active" : "row"}
          onClick={goToActive}
        >
          <MdOutlineRadioButtonChecked className="icon" />
          <Link to="#">Active</Link>
        </div>
        <div
          className={active.includes("saved") ? "row active" : "row"}
          onClick={goToSaved}
        >
          <BsCloudCheckFill className="icon" />
          <Link to="#">Saved</Link>
        </div>
        <div className="grouped">
          <div
            className={active.includes("reported") ? "row active" : "row"}
            onClick={goToReported}
          >
            <TbReportAnalytics className="icon" />
            <p>Reported</p>
          </div>
          <div className="group">
            <div className="row space">
              <Link to="#">Recieved</Link>
              <div className="num">
                <p className="stat">5</p>
              </div>
            </div>
            <div className="row space">
              <Link to="#">Viewed</Link>
              <div className="num">
                <p className="stat">12</p>
              </div>
            </div>
            <div className="row space">
              <Link to="#">Responded</Link>
              <div className="num">
                <p className="stat">23</p>
                <p className="new">+2</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={active.includes("searched") ? "row active" : "row"}
          onClick={goToSearched}
        >
          <MdOutlineManageSearch className="icon" />
          <Link to="#">Searched</Link>
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
    font-size: 1.2em;
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

  .content {
    width: 100%;
    height: auto;
    padding: 10px 0 0 0;

    .group {
      margin: 0 0 0 16px;
      padding: 0 0 0 5px;
      border-left: 1px solid var(--black);
    }

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

      a {
        text-decoration: none;
        color: var(--black);
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

    .active {
      background: var(--gray);
    }

    .space {
      justify-content: space-between !important;
    }
  }
`;

export default ListingSideBar;
