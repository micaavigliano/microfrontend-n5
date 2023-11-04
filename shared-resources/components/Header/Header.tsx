import React, { ReactNode } from "react";
import { HeaderContainer } from "./Header.styled";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <HeaderContainer>{children}</HeaderContainer>
    </>
  );
};

export default Header;
