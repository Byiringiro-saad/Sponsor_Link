import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

//icons
import { FiSearch } from "react-icons/fi";

//components
import ListingSideBar from "../../components/sidebars/listings";
import SearchedFiltering from "../../components/filters/searched";
import SearchedListingsContainer from "../../components/listings/searched/container";

const SearchedListings = () => {
  const listings = useSelector((state) => state.listings.searchedListings);

  return (
    <Container>
      <div className="sidebar">
        <ListingSideBar />
      </div>
      <div className="container">
        <div className="top">
          <p className="header">Previously Searched listings</p>
          <div className="search">
            <FiSearch className="icon" />
            <input type="text" placeholder="Search here..." />
          </div>
          <SearchedFiltering />
        </div>
        <SearchedListingsContainer listings={listings} />
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
      height: auto;
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
        margin: 30px 0;
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

export default SearchedListings;
