import React, { ReactElement } from "react";
import { ButtonContainer } from "./Button.styled";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  title?: string;
  ariaLabel?: string;
}

const Button = (props: Props) => {
  const { onClick, ariaLabel, className, title, ...rest } = props;
  return (
    <ButtonContainer
      aria-label={ariaLabel}
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
