import styled from "styled-components";

const StyledButton = styled.button`
  width: fit-content;
  background-color: green;
  cursor: pointer;
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  letter-spacing: 0.07em;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  will-change: transform, opacity;
  color: white;
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export { StyledButton };
