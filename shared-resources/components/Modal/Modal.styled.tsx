import styled from "styled-components";

export const Dialog = styled.dialog`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.div`
  text-align: center;
  width: 50%;
  height: 50%;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  margin: auto;
  padding: auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: relative;
`;

//rounded-lg
//shadow-md

export const DialogHeader = styled.div`
  position: sticky;
  top: 0;
  height: 5%;
  width: 100%;
  background-color: grey;
`;
