import React from "react";
import styled from "styled-components";

//icons
import { BiPhone } from "react-icons/bi";
import { ImFacebook2 } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const HistoryListing = ({ listing }) => {
  return (
    <Container>
      <div className="topper">
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
          <Type type={listing?.type}>{listing?.type}</Type>
        </div>
      </div>
      <div className="bottom">
        <div className="column">
          <p className="head">Contact details</p>
          <ul>
            <li>
              <HiOutlineMail className="icon" />
              <p>Byiringiro@gmail.com</p>
            </li>
            <li>
              <BiPhone className="icon" />
              <p>+250782138100</p>
            </li>
          </ul>
        </div>
        <div className="column">
          <p className="head">Social media</p>
          <ul>
            <li>
              <ImFacebook2 className="icon" />
              <p>Byiringiro</p>
            </li>
            <li>
              <BsTwitter className="icon" />
              <p>Byiringiro</p>
            </li>
            <li>
              <BsInstagram className="icon" />
              <p>Byiringiro</p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

const Type = styled.p`
  color: ${(props) => props.type === "Pending" && "var(--blue)"};
  color: ${(props) => props.type === "Declined" && "var(--bright)"};
  color: ${(props) => props.type === "Approved" && "var(--green)"};
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  background: var(--white);
  padding: 15px;
  margin: 0 0 10px 0;

  .topper {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

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
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      position: relative;

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
      width: 10%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
    }
  }

  .bottom {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-top: 2px solid var(--gray);
    margin: 20px 0;
    padding: 20px 0;

    .column {
      width: 25%;
      height: auto;

      p.head {
        font-size: 1.1em;
        font-weight: 700;
        margin: 0 0 10px 0;
      }

      ul {
        width: 100%;
        height: auto;

        li {
          width: 100%;
          height: 30px;
          list-style: none;
          display: flex;
          flex-direction: row;
          align-items: center;

          .icon {
            font-size: 1.2em;
            margin: 0 10px 0 0;
          }
        }
      }
    }
  }
`;

export default HistoryListing;
