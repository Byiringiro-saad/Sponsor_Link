import React from "react";
import styled from "styled-components";

//icons
import { AiOutlineCloudDownload } from "react-icons/ai";

const About = () => {
  return (
    <Container>
      <div className="terms">
        <div className="header">
          <p className="head">
            Our <span>terms</span> and <span>conditions</span>.
          </p>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            nobis, aliquid consectetur dolorem illum at dolorum vitae possimus
            corrupti qua corporis adipisci
          </p>
        </div>
        <ol>
          <li>
            <p className="title">Title</p>
            <p className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              itaque dolorum aut? Libero molestias maiores aliquam fuga labore
              similique ab autem ullam, quos deserunt odio adipisci? Ad aperiam
              molestias incidunt.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat itaque dolorum aut? Libero molestias
              maiores aliquam fuga labore similique ab autem ullam, quos
              deserunt odio adipisci? Ad aperiam molestias incidunt.
            </p>
          </li>
          <li>
            <p className="title">Title</p>
            <p className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              itaque dolorum aut? Libero molestias maiores aliquam fuga labore
              similique ab autem ullam, quos deserunt odio adipisci? Ad aperiam
              molestias incidunt.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat itaque dolorum aut? Libero molestias
              maiores aliquam fuga labore similique ab autem ullam, quos
              deserunt odio adipisci? Ad aperiam molestias incidunt.
            </p>
          </li>
          <li>
            <p className="title">Title</p>
            <p className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              itaque dolorum aut? Libero molestias maiores aliquam fuga labore
              similique ab autem ullam, quos deserunt odio adipisci? Ad aperiam
              molestias incidunt.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat itaque dolorum aut? Libero molestias
              maiores aliquam fuga labore similique ab autem ullam, quos
              deserunt odio adipisci? Ad aperiam molestias incidunt.
            </p>
          </li>
          <li>
            <p className="title">Title</p>
            <p className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              itaque dolorum aut? Libero molestias maiores aliquam fuga labore
              similique ab autem ullam, quos deserunt odio adipisci? Ad aperiam
              molestias incidunt.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat itaque dolorum aut? Libero molestias
              maiores aliquam fuga labore similique ab autem ullam, quos
              deserunt odio adipisci? Ad aperiam molestias incidunt.
            </p>
          </li>
          <li>
            <p className="title">Title</p>
            <p className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              itaque dolorum aut? Libero molestias maiores aliquam fuga labore
              similique ab autem ullam, quos deserunt odio adipisci? Ad aperiam
              molestias incidunt.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat itaque dolorum aut? Libero molestias
              maiores aliquam fuga labore similique ab autem ullam, quos
              deserunt odio adipisci? Ad aperiam molestias incidunt.
            </p>
          </li>
        </ol>
        <button>
          <AiOutlineCloudDownload className="icon" />
          <p>Download the document</p>
        </button>
      </div>
      <div className="privacy">
        <div className="header">
          <p className="head">
            Our <span>privacy</span> policy.
          </p>
        </div>
        <p className="one">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          itaque dolorum aut? Libero molestias maiores aliquam fuga labore
          similique ab autem ullam, quos deserunt odio adipisci? Ad aperiam
          molestias incidunt. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Accusamus illum dolor earum quod incidunt corrupti
          facilis! Aliquid repellendus suscipit non veniam, magni, illo at.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque
          dolorum aut? Libero molestias maiores aliquam fuga labore similique ab
          autem ullam, quos deserunt odio adipisci? Ad aperiam molestias
          incidunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Accusamus illum dolor earum quod incidunt corrupti facilis! Aliquid
          repellendus suscipit non veniam, magni, illo at.
        </p>
        <p className="one">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          itaque dolorum aut? Libero molestias maiores aliquam fuga labore
          similique ab autem ullam, quos deserunt odio adipisci? Ad aperiam
          molestias incidunt.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quaerat itaque dolorum aut? Libero molestias maiores aliquam
          fuga labore similique ab autem ullam, quos deserunt odio adipisci? Ad
          aperiam molestias incidunt.
        </p>
        <button>
          <AiOutlineCloudDownload className="icon" />
          <p>Download the document</p>
        </button>
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
      line-height: 60px;
      font-weight: 700;
      text-align: center;
      color: var(--black);

      span {
        color: var(--bright);
      }
    }
  }

  button {
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    background: var(--bright);

    .icon {
      font-size: 1.3em;
      margin: 0 10px 0 0;
      color: var(--white);
    }

    p {
      color: var(--white);
    }
  }

  .terms {
    width: 100%;
    height: auto;
    display: flex;
    padding: 0 50px 30px 50px;
    flex-direction: column;
    align-items: flex-end;
    background: var(--gray);

    ol {
      width: 100%;
      height: auto;
      margin: 0 0 10px 0;

      li {
        width: 100%;
        height: auto;
        margin: 0 0 30px 0;

        p.title {
          font-weight: 700;
        }

        p.content {
          color: var(--dark);
        }
      }
    }
  }

  .privacy {
    width: 100%;
    height: auto;
    display: flex;
    padding: 0 50px 30px 50px;
    flex-direction: column;
    align-items: flex-end;
    background: var(--white);

    .one {
      margin: 0 0 20px 0;
    }
  }
`;

export default About;
