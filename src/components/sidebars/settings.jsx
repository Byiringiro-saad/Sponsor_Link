import React from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

//icons
import { BiChevronsLeft } from "react-icons/bi";
import { GrAppsRounded } from "react-icons/gr";

const SettingsSideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // go to profile
  const goToProfile = () => {
    navigate("/settings/profile");
  };

  // go to pricing
  const goToPricing = () => {
    navigate("/settings/pricing");
  };

  // go to notifications
  const goToNotifications = () => {
    navigate("/settings/notifications");
  };

  return (
    <Container>
      <div className="top">
        <BiChevronsLeft className="big" />
      </div>
      <div
        className={location.pathname.includes("profile") ? "row active" : "row"}
        onClick={goToProfile}
      >
        <GrAppsRounded className="icon" />
        <p>Profile</p>
      </div>
      <div
        className={location.pathname.includes("pricing") ? "row active" : "row"}
        onClick={goToPricing}
      >
        <GrAppsRounded className="icon" />
        <p>Pricing</p>
      </div>
      <div
        className={
          location.pathname.includes("notification") ? "row active" : "row"
        }
        onClick={goToNotifications}
      >
        <GrAppsRounded className="icon" />
        <p>Notifications</p>
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
    }
  }

  .active {
    background: var(--gray);
  }
`;

export default SettingsSideBar;
