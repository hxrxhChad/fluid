import React from "react";
import { styled } from "styled-components";

const Technology = () => {
  return (
    <TechnologyBody>
      <div>
        <h1>What</h1>
        <section>
          <div>
            <h2>Data Scientist</h2>
            <p>
              A Data Scientist is a skilled professional who extracts valuable
              insights and patterns from large datasets using various
              statistical and analytical techniques. They play a crucial role in
              making data-driven decisions and solving complex problems across
              industries.
            </p>
          </div>
          <div>
            <h2>Flutter Full Stack Developer</h2>
            <p>
              A Full Stack Flutter Developer is a versatile professional skilled
              in creating end-to-end applications with Flutter, managing both
              front-end and back-end development.
            </p>
          </div>
          <div>
            <h2>React Full Stack Developer</h2>
            <p>
              A Full Stack React Developer is proficient in both front-end and
              back-end technologies, capable of building dynamic and responsive
              web applications.
            </p>
          </div>
        </section>
      </div>
    </TechnologyBody>
  );
};

export default Technology;

const TechnologyBody = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 20rem;
    }
    section {
      margin-top: 3rem;
      display: flex;

      div {
        max-width: 20rem;
        padding: 0px 2rem;
        h2 {
          font-size: 2rem;
          text-align: center;
          line-height: 3rem;
        }
        p {
          margin-top: 1rem;
          text-align: center;
        }
      }
    }
  }
`;
