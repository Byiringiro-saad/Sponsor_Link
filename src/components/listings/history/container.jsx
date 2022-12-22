import React from "react";
import styled from "styled-components";

//components
import HistoryListing from "./box";
import Paginate from "../../paginate";

const HistoryListingsContainer = ({ listings }) => {
  return (
    <Container>
      <div className="listing">
        {listings.map((listing, index) => (
          <HistoryListing key={index} listing={listing} />
        ))}
      </div>
      <div className="pagination">
        <Paginate />
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

  .pagination {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
`;

export default HistoryListingsContainer;
