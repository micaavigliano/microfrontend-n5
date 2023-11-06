import React, { ReactElement } from "react";
import { ButtonContainer } from "./Button.styled";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  title: string;
}

const Button = (props: Props) => {
  const { onClick, className, title, ...rest } = props;
  return (
    <ButtonContainer
      className={className}
      onClick={onClick}
      title={title}
      {...rest}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
