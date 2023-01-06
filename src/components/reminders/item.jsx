import React from "react";
import styled from "styled-components";

//icons
import { AiTwotoneDelete } from "react-icons/ai";
import { AiFillNotification } from "react-icons/ai";

const RemindersItem = ({ data }) => {
  return (
    <Container>
      <div className="bell">
        <AiFillNotification className="icon" />
      </div>
      <div className="content">
        <p className="title">{data?.title}</p>
        <p className="para">{data?.content}</p>
      </div>
      <div className="delete">
        <AiTwotoneDelete className="icon" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
  background: var(--notification);
  border-radius: 5px;
  position: relative;

  .bell {
    width: 150px;
    height: 100%;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background: var(--gray);
    margin: 0 15px 0 0;

    .icon {
      font-size: 2em;
    }
  }

  .delete {
    width: 35px;
    height: 35px;
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 20px;
    background: var(--gray);
    border-radius: 50%;
  }
`;

export default RemindersItem;
