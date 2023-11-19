import React, { Fragment, useState } from "react";
import styled from "styled-components";

//icons
import { SiMastercard } from "react-icons/si";
import { GrFormAdd, GrPaypal } from "react-icons/gr";

//components
import Checkout from "../../components/pricing/checkout";
import SettingsSideBar from "../../components/sidebars/settings";

const Pricing = () => {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(!showCheckout);
  };

  return (
    <Fragment>
      {showCheckout && <Checkout close={handleCheckout} title="Premium Plan" />}
      <Container>
        <div className="sidebar">
          <SettingsSideBar />
        </div>
        <div className="container">
          <p className="title">Payment Details</p>
          <div className="methods">
            <div className="header">
              <p className="head">Methods</p>
              <div className="add">
                <GrFormAdd className="icon" />
                <p>Add</p>
              </div>
            </div>
            <div className="content">
              <div className="method">
                <GrPaypal className="icon paypal" />
                <p>Paypal</p>
              </div>
              <div className="method">
                <SiMastercard className="icon mastercard" />
                <p>Master card</p>
              </div>
            </div>
          </div>
          <div className="plans">
            <div className="plan default">
              <div className="header">
                <p className="title">Basic Package</p>
                <p className="price">Free</p>
              </div>
              <div className="about">
                <p className="head">Plan includes:</p>
                <ul>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                </ul>
              </div>
              <div className="button">Default</div>
            </div>
            <div className="plan">
              <div className="header">
                <p className="title">Premium Package</p>
                <p className="price">$759</p>
              </div>
              <div className="about">
                <p className="head">Plan includes:</p>
                <ul>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                  <li>Byiringirosaad|@gmail.com</li>
                </ul>
              </div>
              <div className="button" onClick={handleCheckout}>
                Purchase
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
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
      font-size: 1.3em;
      font-weight: 700;
      margin: 0 0 20px 0;
    }

    .methods {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .header {
        width: 100%;
        height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        p.head {
          font-size: 1.1em;
          font-weight: 700;
        }

        .add {
          width: auto;
          height: auto;
          padding: 5px 20px;
          border-radius: 50px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background: var(--darkish);
          cursor: pointer;

          .icon {
            font-size: 1.2em;
            margin: -2px 5px 0 0;
          }
        }
      }

      .content {
        margin: 15px 0;
        width: 100%;
        height: auto;

        .method {
          width: 100%;
          height: 25px;
          display: flex;
          flex-direction: row;

          .icon {
            font-size: 1.2em;
            margin: 0 10px 0 0;
          }

          .paypal {
            color: #003087;
          }

          .mastercard {
            color: #ff5f00;
          }
        }
      }
    }

    .plans {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .default {
        border: 2px solid var(--bright);
      }

      .plan {
        width: 48%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        background: var(--darkish);
        padding: 20px 0;

        .header {
          width: 90%;
          height: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          p.title {
            font-size: 1.2em;
            margin: 0;
          }
        }

        .about {
          width: 90%;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          p.head {
            line-height: 40px;
          }

          ul {
            margin: 0 0 0 20px;
          }
        }

        .button {
          width: 90%;
          height: 40px;
          margin: 20px 0 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          background: var(--bright);
          cursor: pointer;
        }
      }
    }
  }
`;

export default Pricing;
