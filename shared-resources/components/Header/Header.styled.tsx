import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: rgb(51 65 85);
  color: #fff;
  padding: 1%;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;

  @media (max-width: 700px) {
    gap: 2%;
  }
`;
