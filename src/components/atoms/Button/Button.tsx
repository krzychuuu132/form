import React from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  type: string;
  className: string;
  title: string;
  disabled: boolean;
}

const Button = (props: ButtonProps) => {
  const { title } = props;
  return <StyledButton {...props}>{title}</StyledButton>;
};

export default Button;
