import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

//components
import Paginate from "../../components/paginate";
import RemindersContainer from "../../components/reminders/container";

const Reminders = () => {
  //local data
  const reminders = useSelector((state) => state.reminders);

  return (
    <Container>
      <RemindersContainer data={reminders} />
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

export default Reminders;
