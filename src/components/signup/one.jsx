import React from "react";
import styled from "styled-components";

//icons
import { HiUpload } from "react-icons/hi";

const One = () => {
  return (
    <Container>
      <div className="profile">
        <HiUpload className="icon" />
      </div>
      <form>
        <div className="row">
          <div className="column">
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" />
          </div>
          <div className="column">
            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="column">
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="type">First name</label>
            <select id="type">
              <option value="type 1">Type 1</option>
              <option value="type 2">Type 2</option>
              <option value="type 3">Type 3</option>
            </select>
          </div>
          <div className="column">
            <button>Next</button>
          </div>
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

  .profile {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: relative;
    margin: 25px 0 0 0;
    background: var(--white);

    .icon {
      position: absolute;
      bottom: -5px;
      right: 15px;
      color: var(--white);
      cursor: pointer;
      font-size: 2.5em;
      padding: 10px;
      border-radius: 50%;
      background: var(--dark);
    }
  }

  form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;

    .row {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .column {
        width: 400px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        margin: 10px 20px;

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
        }

        select {
          width: 100%;
          height: 45px;
          border: none;
          outline: none;
          padding: 0 10px 0 10px;
          border-radius: 3px;
        }

        button {
          width: 100%;
          height: 45px;
          background: var(--bright);
          color: var(--white);
          border: none;
          border-radius: 3px;
          outline: none;
        }
      }
    }
  }
`;

export default One;
