import styled from "styled-components";
import Button from "sharedResources/components/Button/Button";

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 2%;
  width: 20%;
  justify-content: end;
`;
