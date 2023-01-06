import React from "react";
import styled from "styled-components";

//components
import RemindersItem from "./item";

const RemindersContainer = ({ data }) => {
  return (
    <Container>
      <div className="content">
        {data.map((item, index) => (
          <RemindersItem key={index} data={item} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export default RemindersContainer;
