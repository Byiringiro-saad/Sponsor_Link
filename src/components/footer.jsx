import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//icons
import { IoIosMail } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin, IoCallSharp } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <div className="content">
        <div className="column">
          <div className="logo">
            <p className="header">Logo</p>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              itaque dolorum aut? Libero molestias maiores aliquam fuga labore
              similique ab autem ullam, quos deserunt odio adipisci? Ad aperiam
              molestias incidunt.
            </p>
          </div>
          <div className="icons">
            <div className="one">
              <FaFacebookF className="icon" />
            </div>
            <div className="one">
              <AiFillInstagram className="icon" />
            </div>
            <div className="one">
              <BsTwitter className="icon" />
            </div>
            <div className="one">
              <IoLogoLinkedin className="icon" />
            </div>
          </div>
        </div>
        <div className="column">
          <p className="header">Useful links</p>
          <ul>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/termsconditions">Terms and conditions</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <p className="header">Stay connected</p>
          <div className="row">
            <IoCallSharp className="big" />
            <p>Call (+250)782138100</p>
          </div>
          <div className="row">
            <IoIosMail className="big" />
            <p>support@sponsorlink.com</p>
          </div>
        </div>
      </div>
      <div className="small">
        <p>Copyright All Rights Reserved</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 20px 0 20px;
  background: var(--blue);

  .icon {
    font-size: 1em;
  }

  .big {
    font-size: 1.3em;
    margin: 0 10px 0 0;
  }

  .content {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    .column {
      width: 90%;
      height: auto;
      display: flex;
      color: var(--white);
      flex-direction: column;
      align-items: flex-start;

      p.header {
        font-size: 1.1em;
        font-weight: 700;
        line-height: 60px;
      }

      .text {
        width: 80%;
        margin: 0 0 20px 0;
      }

      .icons {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;

        .one {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 10px 0 0;
          border-radius: 50%;
          border: 1px solid var(--white);
        }
      }

      ul {
        width: 100%;
        height: auto;

        li {
          list-style-type: none;
          line-height: 30px;

          a {
            text-decoration: none;
            color: var(--white);
          }
        }
      }

      .row {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }

  .small {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 0 0;
    color: var(--white);
    border-top: 2px solid var(--white);
  }
`;

export default Footer;
