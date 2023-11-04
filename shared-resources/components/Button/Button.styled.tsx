import styled from "styled-components";
import { Props } from "./Button";

export const ButtonContainer = styled.button<Props>`
  background-color: green;
  width: 20%;
  height: 10%;
  border: none;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &:focus {
    background-color: #888;
  }
`;
