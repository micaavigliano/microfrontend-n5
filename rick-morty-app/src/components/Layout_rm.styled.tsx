import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
`;

export const GeneralInfo = styled.div`
  width: 50%;
  height: auto;
  transition: width 0.4s;
  overflow: hidden;
  transition: width 0.3s, height 0.3s;

  @media (max-width: 700px) {
    width: 100%;
  }

  img {
    border-radius: 50%;
  }
`;

export const MoreInfo = styled.div`
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 1rem;
  text-align: left;
  transition: width 0.3s, height 0.3s;

  h2 {
    text-align: center;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;
