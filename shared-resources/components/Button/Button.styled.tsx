import styled from "styled-components";
import { Props } from "./Button";

export const ButtonContainer = styled.button<Props>`
  width: 20%;
  height: 100px;
  border: none;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 2%;
  color: black;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:focus {
    background-color: #888;
    box-shadow: 0 0 5px #999;
  }
`;
