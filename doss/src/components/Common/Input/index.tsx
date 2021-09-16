import { InputHTMLAttributes, Ref } from "react";
import Button from "../Button";
import { InputContainer, StyledInput } from "./InputStyles";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  overlabHandler?: () => void;
  maxLength?: number;
  className?: string;
  inputRef?: any;
}

const Input: React.VFC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  overlabHandler,
  maxLength,
  className,
  inputRef,
}) => {
  return (
    <InputContainer className={className}>
      <StyledInput
        ref={inputRef}
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {overlabHandler && <Button onClick={overlabHandler}>중복확인</Button>}
    </InputContainer>
  );
};

export default Input;
