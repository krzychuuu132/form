import styled from "styled-components";

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: ${({ type }) => (type === "checkbox" ? "row" : "column")};
  gap: 0.5rem 0;
  align-items: flex-start;
`;

const StyledInput = styled.input`
  cursor: text;
  outline: none;
  padding: 1rem;
  width: 100%;
  letter-spacing: 0.06em;
  border: none;
  border-bottom: 0.1rem solid black;
  line-height: 2rem;
  font-size: 1.7rem;
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
  text-align: center;
`;

export { StyledInputWrapper, StyledInput, StyledLabel };
