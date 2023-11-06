import styled from "styled-components";

export const UlContainer = styled.ul`
  width: 70%;
  padding: 0;
  margin: auto;
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
