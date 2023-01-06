import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

//components
import Paginate from "../../components/paginate";
import NotificationsContainer from "../../components/notifications/container";

const Notifications = () => {
  //local data
  const notifications = useSelector((state) => state.notifications);

  return (
    <Container>
      <NotificationsContainer date="today" data={notifications.slice(0, 3)} />
      <NotificationsContainer date="yesterday" data={notifications} />
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

export default Notifications;
