import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

//icons
import { FiSearch } from "react-icons/fi";

//components
import HistorySideBar from "../components/sidebars/history";
import HistoryFiltering from "../components/filters/history";
import HistoryListingsContainer from "../components/listings/history/container";

const History = () => {
  const listings = useSelector((state) => state.listings.historyListings);

  return (
    <Container>
      <div className="sidebar">
        <HistorySideBar />
      </div>
      <div className="container">
        <div className="top">
          <p className="header">Applications and collaborations</p>
          <div className="search">
            <FiSearch className="icon" />
            <input type="text" placeholder="Search here..." />
          </div>
        </div>
        <HistoryFiltering />
        <HistoryListingsContainer listings={listings} />
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
    align-items: center;

    .top {
      width: 100%;
      height: 150px;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      p.header {
        font-size: 1.5em;
        text-transform: capitalize;
        font-weight: 700;
      }

      .search {
        width: 60%;
        height: 40px;
        display: flex;
        border-radius: 5px;
        flex-direction: row;
        padding: 0 10px;
        align-items: center;
        justify-content: space-around;
        margin: 20px 0;
        background: var(--white);

        input {
          width: 95%;
          height: 100%;
          border: none;
          outline: none;
        }

        .icon {
          font-size: 1.2em;
        }
      }
    }
  }
`;

export default History;
