import React from "react";
import styled from "styled-components";

//icons
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaUser, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineQuestion, AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <Container>
      <div className="questions">
        <div className="header">
          <p className="head">
            Frequently asked <span>questions</span>.
          </p>
        </div>
        <div className="one">
          <div className="thing">
            <AiOutlineQuestion className="icon" />
          </div>
          <div className="content"></div>
        </div>
        <div className="one">
          <div className="content"></div>
          <div className="thing">
            <FaUser className="icon" />
          </div>
        </div>
        <div className="one">
          <div className="thing">
            <AiOutlineQuestion className="icon" />
          </div>
          <div className="content"></div>
        </div>
        <div className="one">
          <div className="content"></div>
          <div className="thing">
            <FaUser className="icon" />
          </div>
        </div>
        <div className="one">
          <div className="thing">
            <AiOutlineQuestion className="icon" />
          </div>
          <div className="content"></div>
        </div>
        <div className="one">
          <div className="content"></div>
          <div className="thing">
            <FaUser className="icon" />
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="header">
          <p className="head">
            <span>Contact</span> us.
          </p>
        </div>
        <div className="container">
          <form className="form">
            <div className="row">
              <input type="text" placeholder="Names" />
              <input type="text" placeholder="Email" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
          </form>
          <div className="infos">
            <p className="title">Get in touch</p>
            <div className="group">
              <div className="one">
                <IoCall className="icon" />
                <p>Call (+250)782138100</p>
              </div>
              <div className="one">
                <IoIosMail className="icon" />
                <p>byiringirosaad@gmail.com</p>
              </div>
            </div>
            <p className="title">Follow us</p>
            <div className="group">
              <FaFacebookF className="icon" />
              <AiFillInstagram className="icon" />
              <FaTwitter className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
        </div>
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
    margin: 50px 0 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p.head {
      font-size: 2.5em;
      line-height: 60px;
      font-weight: 700;
      text-align: center;
      color: var(--black);

      span {
        color: var(--bright);
      }
    }
  }

  .questions {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--white);
    padding: 0 0 30px 0;

    .one {
      width: 70%;
      height: 100px;
      margin: 0 0 25px 0;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      .thing {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--gray);
        border-radius: 50%;

        .icon {
          font-size: 1.3em;
        }
      }

      .content {
        width: calc(100% - 70px);
        height: 100%;
        border-radius: 5px;
        background: var(--gray);
      }
    }
  }

  .contact {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 20px 0;

    .container {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .form {
        width: 45%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 30px 0 0;
        border-right: 2px solid var(--white);

        .row {
          width: 100%;
          height: 50px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          margin: 0 0 20px 0;

          input {
            width: 300px;
            height: 100%;
            margin: 0 0 0 20px;
            padding: 0 10px;
            border-radius: 5px;
            border: none;
            background: var(--white);
            outline: none;
          }
        }

        textarea {
          width: 620px;
          height: 300px;
          margin: 0 0 20px 0;
          padding: 10px;
          border-radius: 5px;
          border: none;
          background: var(--white);
          outline: none;
        }

        button {
          width: 200px;
          height: 40px;
          border: none;
          border-radius: 5px;
          color: var(--white);
          background: var(--bright);
        }
      }

      .infos {
        width: 45%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 0 0 30px;

        p.title {
          font-size: 1.5em;
          font-weight: 700;
        }

        .group {
          width: 100%;
          height: auto;
          padding: 0 0 0 20px;
          margin: 20px 0;

          .icon {
            font-size: 3em;
            padding: 10px;
            border-radius: 50px;
            margin: 0 10px 0 0;
            border: 1px solid var(--dark);
            cursor: pointer;

            :hover {
              color: var(--white);
              background: var(--dark);
            }
          }

          .one {
            width: 100%;
            height: 40px;
            display: flex;
            flex-direction: row;
            align-items: center;

            .icon {
              font-size: 1.3em;
              margin: 0 10px 0 0;
              padding: 0;
              border: none;
              color: var(--dark);

              :hover {
                color: var(--dark);
                background: none;
              }
            }
          }
        }
      }
    }
  }
`;

export default Contact;
