import React from "react";
import { styled } from "styled-components";
const Experience = () => {
  return (
    <ExperienceBody>
      <div>
        <h1>It's all about the Experience</h1>
        <p>
          Throughout my career as a Full Stack React, Flutter Developer & a Data
          Scientist , I've gained valuable experience working on a range of
          projects. From developing user-friendly mobile applications,
          responsive Web pages to integrating cutting-edge technologies, each
          experience has fueled my passion for creating innovative solutions.
        </p>
        <p>
          I thrive in collaborative environments and have honed my skills in
          problem-solving and communication. I am eager to continue pushing
          boundaries and making a positive impact through technology.
        </p>
        <h2>Let's Talk</h2>
      </div>
    </ExperienceBody>
  );
};

export default Experience;

const ExperienceBody = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: rgba(190, 190, 190, 0.25);
  align-items: center;
  justify-content: start;
  div {
    max-width: 30vw;
    margin: 0;
    padding: 0px 200px;
    align-items: start;
    justify-content: start;
    h1 {
      font-size: 4rem;
      line-height: 6vh;
    }
    p {
      margin-top: 2rem;
      font-size: 1.3rem;
    }
    h2 {
      margin-top: 3rem;
      font-size: 3rem;
      text-decoration: underline;
    }
  }
`;
