import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

//icons
import { FiSearch } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";

//components
import ListingSideBar from "../../components/sidebars/listings";
import SavedListingsContainer from "../../components/listings/saved&active/container";

const SavedListings = () => {
  const listings = useSelector((state) => state.listings.savedListings);

  return (
    <Container>
      <div className="sidebar">
        <ListingSideBar />
      </div>
      <div className="container">
        <div className="top">
          <div className="remind">
            <input type="checkbox" id="remind" />
            <label htmlFor="remind">Remind me</label>
            <div className="date">
              <CiCalendar className="icon" />
              <p>22/03/23</p>
            </div>
          </div>
          <p className="header">saved listings</p>
          <div className="search">
            <FiSearch className="icon" />
            <input type="text" placeholder="Search here..." />
          </div>
        </div>
        <SavedListingsContainer listings={listings} />
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
      position: relative;

      .remind {
        position: absolute;
        top: 10px;
        right: 0;
        width: auto;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        input {
          margin: 0 5px 0 0;
        }

        .date {
          width: 100px;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin: 0 0 0 10px;
          border-radius: 5px;
          background: var(--white);
          cursor: pointer;

          .icon {
            font-size: 1.2em;
            margin: 0 5px 0 0;
          }
        }
      }

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

export default SavedListings;
