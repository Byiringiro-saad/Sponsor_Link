import React from "react";
import styled from "styled-components";

const Two = () => {
  return (
    <Container>
      <form>
        <div className="top">
          <div className="left">
            <div className="row">
              <label htmlFor="country">Country</label>
              <select id="country">
                <option value="type 1">Type 1</option>
                <option value="type 2">Type 2</option>
                <option value="type 3">Type 3</option>
              </select>
            </div>
            <div className="row">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" />
            </div>
            <div className="row">
              <label htmlFor="industry">Industry</label>
              <select id="industry">
                <option value="type 1">Type 1</option>
                <option value="type 2">Type 2</option>
                <option value="type 3">Type 3</option>
              </select>
            </div>
          </div>
          <div className="right">
            <div className="row">
              <label htmlFor="stags">General tags</label>
              <div className="input"></div>
            </div>
            <div className="row">
              <label htmlFor="stags">Specialized tags</label>
              <div className="input"></div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="row">
            <label htmlFor="desc">Description</label>
            <textarea id="desc" cols="30" rows="10"></textarea>
          </div>
          <div className="buttons">
            <button className="gray">Back</button>
            <button className="bright">Next</button>
          </div>
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .row {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;

      label {
        line-height: 35px;
      }

      input {
        width: 100%;
        height: 45px;
        border: none;
        outline: none;
        padding: 0 0 0 10px;
        border-radius: 3px;
        background: var(--white);
      }

      .input {
        width: 100%;
        height: 95px;
        border: none;
        outline: none;
        padding: 0 0 0 10px;
        border-radius: 3px;
        background: var(--white);
      }

      select {
        width: 100%;
        height: 45px;
        border: none;
        outline: none;
        padding: 0 10px 0 10px;
        border-radius: 3px;
        background: var(--white);
      }

      textarea {
        width: 100%;
        height: auto;
        border: none;
        outline: none;
        padding: 10px;
        border-radius: 3px;
        background: var(--white);
      }
    }

    .top {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .left {
        width: 46%;
        height: auto;
        display: flex;
        flex-direction: column;
      }

      .right {
        width: 46%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    .bottom {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .buttons {
        width: 100%;
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
  }
`;

export default Two;
