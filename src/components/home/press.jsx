import React from "react";
import styled from "styled-components";

//icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Press = () => {
  return (
    <Container>
      <div className="header">
        <p className="head">
          <span>Press</span> release
        </p>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          nobis, aliquid consectetur dolorem illum at dolorum vitae possimus
          corrupti qua corporis adipisci!
        </p>
      </div>
      <div className="slider">
        <div className="direction">
          <BiChevronLeft className="icon" />
        </div>
        <div className="all">
          <div className="article">
            <div className="image"></div>
            <p className="title">Title of article</p>
            <p className="about">
              dolor sit amet consectetur, adipisicing elit. Officiis nobis,
              aliquid consectetur dolorem illum at dolorum .
            </p>
            <button>Read more</button>
          </div>
          <div className="article">
            <div className="image"></div>
            <p className="title">Title of article</p>
            <p className="about">
              dolor sit amet consectetur, adipisicing elit. Officiis nobis,
              aliquid consectetur dolorem illum at dolorum .
            </p>
            <button>Read more</button>
          </div>
          <div className="article">
            <div className="image"></div>
            <p className="title">Title of article</p>
            <p className="about">
              dolor sit amet consectetur, adipisicing elit. Officiis nobis,
              aliquid consectetur dolorem illum at dolorum .
            </p>
            <button>Read more</button>
          </div>
        </div>
        <div className="direction">
          <BiChevronRight className="icon" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  align-items: center;
  background: var(--gray);

  .header {
    width: 100%;
    height: auto;
    margin: 50px 0 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p.head {
      font-size: 2.5em;
      font-weight: 700;
      text-align: center;
      color: var(--black);

      span {
        color: var(--bright);
      }
    }
  }

  .slider {
    width: 100%;
    height: 400px;
    display: grid;
    grid-template-columns: 0.5fr 3fr 0.5fr;
    justify-content: center;

    .direction {
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        font-size: 3em;
      }
    }

    .all {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;

      .article {
        width: 300px;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 15px;

        .image {
          width: 100%;
          height: 200px;
          border-radius: 5px;
          background: var(--white);
        }

        p.title {
          margin: 15px 0;
          font-weight: 700;
        }

        button {
          width: 100%;
          height: 35px;
          margin: 15px 0;
          border: none;
          background: var(--bright);
          color: var(--white);
          border-radius: 5px;
        }
      }
    }
  }
`;

export default Press;
