import React from "react";
import styled from "styled-components";

//icons
import {
  BsLinkedin,
  BsFacebook,
  BsBehance,
  BsInstagram,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";

const Three = () => {
  return (
    <Container>
      <form>
        <div className="top">
          <div className="left">
            <div className="row">
              <BsFacebook className="icon facebook" />
              <input type="text" />
            </div>
            <div className="row">
              <BsBehance className="icon behance" />
              <input type="text" />
            </div>
            <div className="row">
              <BsInstagram className="icon instagram" />
              <input type="text" />
            </div>
          </div>
          <div className="right">
            <div className="row">
              <BsLinkedin className="icon linkedin" />
              <input type="text" />
            </div>
            <div className="row">
              <BsTwitter className="icon twitter" />
              <input type="text" />
            </div>
            <div className="row">
              <BsGithub className="icon twitter" />
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <button className="gray">Back</button>
          <button className="bright">Next</button>
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
      width: 110%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      > div {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;

        .row {
          width: 90%;
          height: 45px;
          display: flex;
          margin: 0 0 20px 0;
          flex-direction: row;
          align-items: center;

          input {
            width: 100%;
            height: 45px;
            border: none;
            border-radius: 5px;
            outline: none;
            padding: 0 10px 0 10px;
          }

          .icon {
            font-size: 1.5em;
            margin: 0 10px 0 0;
          }
        }
      }

      .left {
        align-items: flex-start;
      }

      .right {
        align-items: flex-end;
      }
    }

    .bottom {
      width: 110%;
      height: 100px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      button {
        width: 30%;
        height: 40px;
        border: none;
        border-radius: 5px;
      }

      .gray {
        background: var(--white);
      }

      .bright {
        background: var(--bright);
        color: var(--white);
      }
    }
  }
`;

export default Three;
