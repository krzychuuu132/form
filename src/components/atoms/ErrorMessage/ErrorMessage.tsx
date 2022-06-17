import React from "react";
import { StyledErrorMessage } from "./ErrorMessage.styles";

interface ErrorMessageProps {
  message: String;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};

export default ErrorMessage;
