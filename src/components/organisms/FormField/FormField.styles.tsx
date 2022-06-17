import styled from "styled-components";

const StyledForm = styled.form`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  p {
    margin: 0;
  }
`;

const StyledLoaderWrapper = styled.div`
  display: flex;
  gap: 0 1rem;
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  input {
    width: auto;
    margin-right: 1rem;
  }
`;

export { StyledForm, StyledLoaderWrapper, StyledCheckboxWrapper };
