import React from "react";
import styled from "styled-components";

//icons
import { AiTwotoneDelete } from "react-icons/ai";
import { MdNotificationsActive } from "react-icons/md";

const NotificationsItem = ({ data }) => {
  console.log(data);

  return (
    <Container bell={data?.color}>
      <div className="left">
        <div className="bell">
          <MdNotificationsActive className="icon" />
        </div>
        <div className="content">
          <p>{data?.content}</p>
          <div className="actions">
            {data?.actions.map((item, index) => (
              <ActionButton key={index} item={item}>
                {item}
              </ActionButton>
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <p className="time">{data?.time}</p>
        <div className="delete">
          <AiTwotoneDelete className="icon" />
        </div>
      </div>
    </Container>
  );
};

const ActionButton = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 0 10px 0 0;
  background: ${(props) => (props.item === "view" ? "var(--blue)" : "")};
  background: ${(props) => (props.item === "accept" ? "var(--blue)" : "")};
  background: ${(props) => (props.item === "decline" ? "var(--red)" : "")};
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background: var(--notification);
  padding: 20px;
  margin: 0 0 10px 0;
  border-radius: 10px;

  .left {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    .bell {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 20px 0 0;
      border-radius: 50%;
      background: ${(props) => `#${props.bell}`};

      .icon {
        font-size: 1.3em;
      }
    }

    .content {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start !important;
      justify-content: space-between !important;

      .actions {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
      }
    }
  }

  .right {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;

    .time {
      margin: 8px 0 0 0;
    }

    .delete {
      width: 35px;
      height: 35px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0 0 0 20px;
      background: var(--gray);
      border-radius: 50%;
    }
  }
`;

export default NotificationsItem;
