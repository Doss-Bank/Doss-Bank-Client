import { VFC } from "react";
import { StyledButton } from "./ButtonStyle";

interface ButtonInterfaces {
  children: string;
  onClick?: () => void;
  className?: string;
}

const Button: VFC<ButtonInterfaces> = ({ children, onClick, className }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  children: "버튼",
};

export default Button;
