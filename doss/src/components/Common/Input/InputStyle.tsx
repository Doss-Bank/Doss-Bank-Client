import styled from "@emotion/styled";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem 0;
  .input_label {
    line-height: 2rem;
    color: rgb(78, 89, 104);
  }
  .input {
    padding: 1rem 1.2rem;
    border-radius: 10px;
    outline: none;
    border: none;
    box-shadow: inset 0 0 0 1px rgb(0 27 55 / 10%);
    transition: ease-in-out 0.2s;
    &::placeholder {
      color: #4e5968;
    }
    &:hover {
      box-shadow: inset 0 0 0 2px #90c2ff;
    }
    &:focus {
      box-shadow: inset 0 0 0 2px #4593fc;
    }
  }
`;
