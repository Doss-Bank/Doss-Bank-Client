import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  & > input {
    flex: 8;
  }
  & > button {
    flex: 2;
    margin-left: 1rem;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid black;
  outline: none;
  height: 50px;
  padding: 0 9px 0 9px;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  transition: ease-in-out 0.2s;
  &:focus {
    border: 1px solid #3182f6;
  }
  &::placeholder {
    font-weight: lighter;
  }
`;
