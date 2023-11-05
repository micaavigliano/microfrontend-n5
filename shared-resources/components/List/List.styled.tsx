import styled from "styled-components";

export const UlContainer = styled.ul`
  width: 70%;
  padding: 0;
  margin: auto;
`;

export const Avatar = styled.img`
  width: 8vw;

  @media (max-width: 700px) {
    width: 15vw;
  }
`;

export const LiContainer = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  padding: 2%;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const GeneralInfo = styled.div`
  width: 50%;
  height: auto;
  transition: width 0.4s;
  overflow: hidden;

  @media (max-width: 700px) {
    width: 100%;
  }

  img {
    border-radius: 50%;
  }
`;

export const MoreInfo = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1rem;
  text-align: left;

  h2 {
    text-align: center;
  }
`;
