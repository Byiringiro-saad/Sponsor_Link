import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

//icons
import { BsBellFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

//components
import Top from "./top";

const Nav = () => {
  //configs
  const location = useLocation();
  //local data
  const [active, setActive] = React.useState("");

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <Container>
      <Top />
      <div className="nav">
        <div className="links">
          <Link
            to="/explore"
            className={active.includes("explore") ? "active" : ""}
          >
            Explore
          </Link>
          <Link
            to="/listings/active"
            className={active.includes("listings") ? "active" : ""}
          >
            manage listings <BiChevronDown className="big" />
          </Link>
          <Link
            to="/history"
            className={active.includes("history") ? "active" : ""}
          >
            History <BiChevronDown className="big" />
          </Link>
          <Link
            to="/settings"
            className={active.includes("settings") ? "active" : ""}
          >
            Settings
          </Link>
        </div>
        <div className="icons">
          <div className="one">
            <BsBellFill className="icon" />
          </div>
          <div className="two">
            <div className="one"></div>
            <BiChevronDown className="big" />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;

  .icon {
    font-size: 1.1em;
  }

  .big {
    font-size: 1.5em;
    color: var(--white);
  }

  .nav {
    width: 100%;
    height: 70px;
    padding: 0 20px;
    background: var(--blue);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .links {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      a {
        height: 100%;
        font-size: 1em;
        padding: 0 10px;
        margin: 0 30px 0 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: var(--white);
        text-decoration: none;
        text-transform: capitalize;
      }

      .active {
        border-bottom: 2px solid var(--bright);
      }
    }

    .icons {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      > div {
        margin: 0 0 0 15px;
      }

      .one {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: var(--white);
      }

      .two {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }
`;

export default Nav;
