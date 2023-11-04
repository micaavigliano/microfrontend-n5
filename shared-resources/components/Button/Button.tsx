import React, { ReactElement } from "react";
import { ButtonContainer } from "./Button.styled";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  //children: ReactElement;
  className: any;
  title: string;
}

const Button = (props: Props) => {
  const { onClick, className, title, ...rest } = props;
  return (
    <>
      <ButtonContainer
        className={className}
        onClick={onClick}
        title={title}
        {...rest}
      >
        {title}
      </ButtonContainer>
    </>
  );
};

export default Button;
