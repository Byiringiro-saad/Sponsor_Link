import React from "react";
import styled from "styled-components";

//icons
import { FiEdit2 } from "react-icons/fi";
import { BiTrashAlt } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const SavedListing = ({ listing }) => {
  return (
    <Container>
      <div className="left">
        <div className="profile">
          <div className="image"></div>
          <p className="name">{listing?.name}</p>
        </div>
        <button type="button">Report</button>
      </div>
      <div className="middle">
        <p className="header">{listing?.title}</p>
        <p className="time">{listing?.time}</p>
        <div className="location">
          <MdLocationPin className="icon" />
          <p>{listing?.location}</p>
        </div>
        <p className="description">{listing?.about}</p>
        <div className="tags">
          {listing?.tags.map((tag, index) => (
            <p className="tag" key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="top">
          <p className="title">Expiry</p>
          <p className="date">{listing?.expiry}</p>
        </div>
        <div className="icons">
          <div className="icon">
            <AiOutlineEye className="big" />
          </div>
          <div className="icon">
            <FiEdit2 className="big" />
          </div>
          <div className="icon">
            <BiTrashAlt className="big" />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
  margin: 0 0 10px 0;
  border-radius: 5px;
  background: var(--white);

  .left {
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .profile {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gray);
      }

      .name {
        line-height: 30px;
        text-transform: capitalize;
      }
    }

    button {
      width: 75%;
      height: 30px;
      border-radius: 5px;
      border: none;
      font-size: 1em;
      background: var(--gray);
    }
  }

  .middle {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    p.header {
      font-size: 1.2em;
      font-weight: 700;
    }

    p.time {
      color: var(--bright);
    }

    .location {
      height: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;

      .icon {
        margin: 0 5px 0 0;
        color: var(--blue);
      }
    }

    .tags {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;

      .tag {
        line-height: 30px;
        border-radius: 50px;
        margin: 0 10px 0 0;
        padding: 0 20px;
        color: var(--bright);
        background: var(--grayish);
      }
    }
  }

  .right {
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .top {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      p.title {
        margin: 0 0 5px 0;
        color: var(--dark);
      }
    }

    .icons {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-end;

      .icon {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin: 0 0 0 10px;
        border: 2px solid var(--dark);

        .big {
          font-size: 1.1em;
          color: var(--dark);
        }
      }
    }
  }
`;

export default SavedListing;
