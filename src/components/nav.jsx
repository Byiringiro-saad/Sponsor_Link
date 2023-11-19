import styled from "styled-components";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

//icons
import { BsBellFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

//components
import Top from "./top";

const Nav = () => {
  //configs
  const location = useLocation();
  const navigate = useNavigate();

  //local data
  const [active, setActive] = React.useState("");
  const [authenticated, setAuthenticated] = React.useState(true);

  const goToNotifications = () => {
    navigate("/notifications");
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <Container>
      {authenticated ? (
        <>
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
                to="/settings/profile"
                className={active.includes("settings") ? "active" : ""}
              >
                Settings
              </Link>
            </div>
            <div className="icons">
              <div onClick={goToNotifications} className="one">
                <BsBellFill
                  className={
                    active === "/notifications" ? "icon active" : "icon"
                  }
                />
              </div>
              <div className="two">
                <div className="one"></div>
                <BiChevronDown className="big" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container">
          <div className="left">
            <p className="logo">Logo</p>
          </div>
          <div className="middle">
            <Link to="/" className={active === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/explore"
              className={active === "/explore" ? "active" : ""}
            >
              Explore
            </Link>
            <Link to="/about" className={active === "/about" ? "active" : ""}>
              About
            </Link>
            <Link
              to="/contact"
              className={active === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </div>
          <div className="right">
            <Link to="/login" className={active === "/login" ? "active" : ""}>
              Login
            </Link>
            <Link
              to="/signup"
              className={active === "/signup" ? "active button" : "button"}
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;

  .container {
    width: 100%;
    height: 70px;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: var(--white);

    .left {
      width: 20%;
      height: 100%;
      display: flex;
      align-items: center;

      p.logo {
        font-size: 1.2em;
        font-weight: 700;
      }
    }

    .middle {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;
        margin: 0 25px;
        color: var(--black);
      }

      .active {
        color: var(--bright);
      }
    }

    .right {
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      a {
        text-decoration: none;
        margin: 0 0 0 30px;
        color: var(--black);
      }

      .active {
        color: var(--bright);
      }

      .button {
        padding: 7px 30px;
        border-radius: 5px;
        color: var(--white);
        background: var(--bright);
      }
    }
  }

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
        cursor: pointer;
      }

      .one {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: var(--white);

        .active {
          color: var(--bright);
        }
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
