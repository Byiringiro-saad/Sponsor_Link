import React from "react";
import styled from "styled-components";

//components
import NotificationsItem from "./item";

const NotificationsContainer = ({ date, data }) => {
  return (
    <Container>
      <p className="title">{date}</p>
      <div className="content">
        {data.map((item, index) => (
          <NotificationsItem key={index} data={item} />
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

  p.title {
    font-size: 1.1em !important;
    line-height: 70px;
    text-transform: uppercase;
  }
`;

export default NotificationsContainer;
