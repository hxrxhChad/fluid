import React from "react";
import { styled } from "styled-components";
import { HiFingerPrint } from "react-icons/hi";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <FooterBody>
      <div className="body">
        <div className="left">
          <HiFingerPrint className="icon" />
          <h1>
            "Don't leave thing in between
            <br />
            Gym Code Sleep Repeat"
          </h1>
          <p> - My Ninja Way</p>
        </div>
        <div className="right">
          <p>Works</p>
          <p>About</p>
          <p>Knowledge</p>
          <div className="iconRow">
            <FiGithub className="newIcons" />
            <FiInstagram className="newIcons" />
            <FiLinkedin className="newIcons" />
          </div>
        </div>
      </div>
    </FooterBody>
  );
};

export default Footer;

const FooterBody = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .body {
    display: flex;
    justify-content: space-between;
    max-width: 100rem;
    .left {
      padding-right: 50rem;
      color: white;
      .icon {
        height: 3rem;
        width: 3rem;
        margin-bottom: 2rem;
      }
      h1 {
        font-size: 2rem;
        color: white;
      }
      p {
        margin-top: 2rem;
        color: white;
        font-size: 1rem;
      }
    }
    .right {
      color: white;
      p {
        text-align: end;
        font-size: 1.5rem;
        text-decoration: underline;
        margin-bottom: 1rem;
      }
      .iconRow {
        margin-top: 4rem;
        .newIcons {
          height: 2rem;
          width: 2rem;
          padding-left: 2rem;
        }
      }
    }
  }
`;
