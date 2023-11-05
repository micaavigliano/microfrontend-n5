import React, { ReactNode } from "react";
import { FooterContainer } from "./Footer.styled";

interface FooterProps {
  children: ReactNode;
}

const Header: React.FC<FooterProps> = ({ children }) => {
  return (
    <>
      <FooterContainer>{children}</FooterContainer>
    </>
  );
};

export default Header;
