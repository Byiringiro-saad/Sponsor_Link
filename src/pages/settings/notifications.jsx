import React from "react";
import styled from "styled-components";

//components
import SettingsSideBar from "../../components/sidebars/settings";

const Notifications = () => {
  return (
    <Container>
      <div className="sidebar">
        <SettingsSideBar />
      </div>
      <div className="container">
        <p className="title">Notification settings</p>
        <div className="settings">
          <div className="row">
            <div className="header">
              <input type="radio" name="notification" id="one" />
              <label htmlFor="one">
                <p>Online</p>
              </label>
            </div>
            <p>Receive all notifications of all kinds.</p>
          </div>
          <div className="row">
            <div className="header">
              <input type="radio" name="notification" id="two" />
              <label htmlFor="two">
                <p>Do Not Disturb</p>
              </label>
            </div>
            <p>Only receive important notifications.</p>
          </div>
          <div className="row">
            <div className="header">
              <input type="radio" name="notification" id="three" />
              <label htmlFor="three">
                <p>Offline</p>
              </label>
            </div>
            <p>Turn off all notificatins.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  .sidebar {
    width: 23%;
  }

  .container {
    width: 75%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p.title {
      font-size: 1.3rem;
      font-weight: 700;
      margin: 0 0 20px 0;
    }

    .settings {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      .row {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .header {
          width: 100%;
          height: 30px;
          display: flex;
          flex-direction: row;
          align-items: center;

          p {
            font-size: 1.2em;
            font-weight: 700;
            margin: 0;
          }

          input {
            margin: 0 5px 0 0;
          }
        }

        p {
          margin: 0 0 0 20px;
        }
      }
    }
  }
`;

export default Notifications;
