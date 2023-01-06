import styled from "styled-components";
import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

//icons
import { AiTwotoneDelete } from "react-icons/ai";

const Notification = () => {
  //configs
  const location = useLocation();

  const [active, setActive] = React.useState("");

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <Container>
      <div className="container">
        <p className="title">Notifications</p>
        <div className="header">
          <div className="nav">
            <Link
              to="/notifications"
              className={active === "/notifications" ? "active" : ""}
            >
              Notification
            </Link>
            <Link
              to="/notifications/reminders"
              className={active === "/notifications/reminders" ? "active" : ""}
            >
              Reminders
            </Link>
          </div>
          <div className="actions">
            <p>Mark all as read</p>
            <div className="delete">
              <AiTwotoneDelete className="icon" />
            </div>
          </div>
        </div>
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
  padding: 20px 0;

  .container {
    width: 98%;
    height: auto;
    padding: 20px;
    border-radius: 10px;
    background: var(--white);

    p.title {
      font-size: 1.3em;
      font-weight: 700;
      margin: 0 0 20px 0;
    }

    .header {
      width: 100%;
      height: 55px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid var(--dark);

      .nav {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;

        a {
          height: 100%;
          text-decoration: none;
          margin: 0 10px -4px 0;
        }

        .active {
          color: var(--bright);
          border-bottom: 3px solid var(--bright);
        }
      }

      .actions {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding: 0 10px 0 0;

        p {
          color: var(--bright);
          cursor: pointer;
        }

        .delete {
          width: 35px;
          height: 35px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin: 0 0 0 20px;
          background: var(--gray);
          border-radius: 50%;
        }
      }
    }
  }
`;

export default Notification;
