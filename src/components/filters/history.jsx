import React from "react";
import styled from "styled-components";

const HistoryFiltering = () => {
  return (
    <Container>
      <div className="column">
        <p className="head">Sort by</p>
        <ul>
          <li>
            <input type="checkbox" id="dateasc" />
            <label htmlFor="dateasc">Date asc</label>
          </li>
          <li>
            <input type="checkbox" id="datedesc" />
            <label htmlFor="datedesc">Date desc</label>
          </li>
          <li>
            <input type="checkbox" id="distanceasc" />
            <label htmlFor="distanceasc">Diatance asc</label>
          </li>
          <li>
            <input type="checkbox" id="distancedesc" />
            <label htmlFor="distancedesc">Distance desc</label>
          </li>
        </ul>
      </div>
      <div className="column">
        <p className="head">Opportunity type</p>
        <ul>
          <li>
            <input type="checkbox" id="one" />
            <label htmlFor="one">Name</label>
          </li>
          <li>
            <input type="checkbox" id="two" />
            <label htmlFor="two">Name</label>
          </li>
          <li>
            <input type="checkbox" id="three" />
            <label htmlFor="three">Name</label>
          </li>
        </ul>
      </div>
      <div className="column">
        <div className="row">
          <p className="head">Industry</p>
          <select>
            <option value="One">One</option>
            <option value="Two">Two</option>
          </select>
        </div>
        <div className="row">
          <p className="head">General tag</p>
          <select>
            <option value="One">One</option>
            <option value="Two">Two</option>
          </select>
        </div>
      </div>
      <div className="column">
        <div className="row">
          <p className="head">Specialized tag</p>
          <select>
            <option value="One">One</option>
            <option value="Two">Two</option>
          </select>
        </div>
      </div>
      <div className="column">
        <p className="head">User experience</p>
        <ul>
          <li>
            <input type="checkbox" id="high" />
            <label htmlFor="high">High</label>
          </li>
          <li>
            <input type="checkbox" id="low" />
            <label htmlFor="low">Low</label>
          </li>
        </ul>
      </div>
      <div className="column">
        <p className="head">Contact details</p>
        <ul>
          <li>
            <input type="checkbox" id="email" />
            <label htmlFor="email">Email</label>
          </li>
          <li>
            <input type="checkbox" id="social" />
            <label htmlFor="social">Social media</label>
          </li>
          <li>
            <input type="checkbox" id="number" />
            <label htmlFor="number">Phone number</label>
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 30px 10px;
  margin: 0 0 50px 0;
  border-top: 2px solid var(--white);
  border-bottom: 2px solid var(--white);

  .head {
    font-size: 1em;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .column {
    width: 22%;
    margin: 10px 0;

    ul {
      width: 100%;

      li {
        width: 100%;
        height: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;

        input {
          margin-right: 5px;
        }
      }
    }

    .row {
      width: 100%;
      height: 70px;
    }

    select {
      width: 60%;
      height: 25px;
      border-radius: 5px;
    }
  }
`;

export default HistoryFiltering;
