import { VFC } from "react";
import { StyledInputContainer } from "./InputStyle";

interface InputInterfaces {
  inputTitle?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  inputId?: string;
  type?: "number" | "password" | "text";
  pattern?: string;
}

const Input: VFC<InputInterfaces> = ({
  inputTitle,
  value,
  onChange,
  placeholder,
  inputId,
  type,
  pattern,
}) => {
  return (
    <StyledInputContainer>
      <label htmlFor={`__input__${inputId}`} className="input_label">
        {inputTitle}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={`__input__${inputId}`}
        className="input"
        pattern={pattern}
      />
    </StyledInputContainer>
  );
};

export default Input;
