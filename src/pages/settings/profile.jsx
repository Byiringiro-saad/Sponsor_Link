import React from "react";
import styled from "styled-components";

//icons
import { MdEdit } from "react-icons/md";
import { GrFormAdd } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { SiTwitter, SiGithub } from "react-icons/si";
import { ImFacebook, ImBehance } from "react-icons/im";

//components
import SettingsSideBar from "../../components/sidebars/settings";

const Profile = () => {
  return (
    <Container>
      <div className="sidebar">
        <SettingsSideBar />
      </div>
      <div className="container">
        <div className="cover"></div>
        <div className="about">
          <div className="image"></div>
          <div className="info">
            <p className="name">Byiringiro Saad</p>
            <p className="para">
              Coding on ReactJs and ExpressJS plus Designing on Figma and adobe
              illustrator. Help companies to design brands and build complex web
              applications with modern technologies.
            </p>
            <div className="edit">
              <MdEdit />
            </div>
          </div>
        </div>
        <table>
          <tr>
            <td className="title">Country</td>
            <td className="value">USA</td>
            <td className="action">Edit</td>
          </tr>
          <tr>
            <td className="title">Location</td>
            <td className="value">B Block, Mark City</td>
            <td className="action">Edit</td>
          </tr>
          <tr>
            <td className="title">Industry</td>
            <td className="value">IT</td>
            <td className="action">Edit</td>
          </tr>
          <tr>
            <td className="title">Account type</td>
            <td className="value">Type</td>
            <td className="action">Edit</td>
          </tr>
          <tr>
            <td className="title">Email</td>
            <td className="value">byiringirosaad@gmail.com</td>
            <td className="action">Edit</td>
          </tr>
          <tr>
            <td className="title">Phone number</td>
            <td className="value">+250782138100</td>
            <td className="action">Edit</td>
          </tr>
        </table>
        <div className="socials">
          <p className="title">Social Media</p>
          <div className="content">
            <div className="social">
              <ImFacebook className="icon facebook" />
              <p className="name">byiringiros@saad</p>
            </div>
            <div className="social">
              <TfiLinkedin className="icon linkedin" />
              <p className="name">byiringiros@saad</p>
            </div>
            <div className="social">
              <SiTwitter className="icon twitter" />
              <p className="name">byiringiros@saad</p>
            </div>
            <div className="social">
              <ImBehance className="icon behance" />
              <p className="name">byiringiros@saad</p>
            </div>
            <div className="social">
              <SiGithub className="icon github" />
              <p className="name">byiringiros@saad</p>
            </div>
            <div className="social">
              <AiFillInstagram className="icon instagram" />
              <p className="name">byiringiros@saad</p>
            </div>
          </div>
        </div>
        <div className="tags">
          <p className="title">General tags</p>
          <div className="content">
            <div className="tag">Graphics designer</div>
            <div className="tag">UI UX</div>
            <div className="add">
              <GrFormAdd className="icon" />
              <p>Add</p>
            </div>
          </div>
        </div>
        <div className="tags special">
          <p className="title">Specialized tags</p>
          <div className="content">
            <div className="tag">Graphics designer</div>
            <div className="tag">UI UX</div>
            <div className="add">
              <GrFormAdd className="icon" />
              <p>Add</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  .sidebar {
    width: 23%;
  }

  .container {
    width: 75%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .cover {
      width: 100%;
      height: 200px;
      background-color: #f5f5f5;
      border-radius: 10px;
    }

    .about {
      width: 95%;
      height: 100px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 20px;
      position: relative;

      .image {
        width: 180px;
        height: 180px;
        margin: -100px 20px 0 0;
        background-color: var(--white);
        border-radius: 50%;
      }

      .info {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        .name {
          font-weight: 700;
          margin: 0 0 10px 0;
        }

        .para {
          width: 90%;
        }

        .edit {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 0;
          right: 0;
          background-color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    table {
      width: 95%;
      height: auto;
      margin-top: 20px;
      border-collapse: collapse;

      tr {
        height: 50px;
        border-bottom: 2px solid var(--darkish);

        td.title {
          padding: 0 0 0 15px;
        }

        td.value {
          font-weight: 700;
        }

        td.action {
          color: var(--blue);
          cursor: pointer;
        }
      }
    }

    .socials {
      width: 95%;
      height: auto;
      padding: 5px 0 20px 15px;
      border-bottom: 2px solid var(--darkish);

      .title {
        line-height: 40px;
      }

      .content {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;

        .social {
          width: auto;
          height: auto;
          padding: 10px 20px;
          border-radius: 50px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          margin: 10px 0 0 0;
          background: var(--darkish);
          margin: 0 10px 0 0;

          .icon {
            font-size: 1.2em;
            margin: 0 10px 0 0;
          }

          .facebook {
            color: #3b5998;
          }

          .linkedin {
            color: #0077b5;
          }

          .twitter {
            color: #1da1f2;
          }

          .behance {
            color: #1769ff;
          }

          .github {
            color: #333;
          }

          .instagram {
            color: #e4405f;
          }
        }
      }
    }

    .tags {
      width: 95%;
      height: auto;
      padding: 5px 0 20px 15px;
      border-bottom: 2px solid var(--darkish);

      .title {
        line-height: 40px;
      }

      .content {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;

        .tag {
          width: auto;
          height: auto;
          padding: 10px 20px;
          border-radius: 50px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin: 0 10px 0 0;
          color: var(--bright);
          background: var(--grayish);
        }

        .add {
          width: auto;
          height: auto;
          padding: 10px 20px;
          border-radius: 50px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background: var(--darkish);
          cursor: pointer;

          .icon {
            font-size: 1.2em;
            margin: -2px 5px 0 0;
          }
        }
      }
    }

    .special {
      border: none;
    }
  }
`;

export default Profile;
