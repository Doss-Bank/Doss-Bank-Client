import { VFC } from "react";
import { StyledInputContainer } from "./InputStyle";

interface InputInterfaces {
  inputTitle?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  inputId: string;
}

const Input: VFC<InputInterfaces> = ({
  inputTitle,
  value,
  onChange,
  placeholder,
  inputId,
}) => {
  return (
    <StyledInputContainer>
      <label htmlFor={`__input__${inputId}`} className="input_label">
        {inputTitle}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={`__input__${inputId}`}
        className="input"
      />
    </StyledInputContainer>
  );
};

export default Input;
