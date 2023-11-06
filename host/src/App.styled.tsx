import styled from "styled-components";

export const Main = styled.main`
  height: 90vh;
  padding: 1%;

  & h1 {
    padding-left: 3%;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80%;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 50%;

  & section {
    width: 50%;
  }

  & button {
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 50%;
    flex-direction: column;

    & button {
      display: inline-block;
      vertical-align: middle;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      width: 40%;
    }
  }
`;
