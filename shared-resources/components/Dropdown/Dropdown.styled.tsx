import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  & button.dropdown-btn {
    padding: 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 128px;
    height: 42px;

    &:focus {
      background-color: #888;
      box-shadow: 0 0 5px #999;
    }
  }

  & ul.dropdown-list {
    position: absolute;
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    z-index: 1;
    background-color: #fff;
    border: 1px solid #ccc;
    width: -webkit-fill-available;

    & li {
      padding: 8px 12px;
      cursor: pointer;
      color: black;
    }
  }
`;
