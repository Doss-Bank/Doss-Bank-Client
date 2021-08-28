import { VFC } from "react";
import { StyledButton } from "./ButtonStyle";

interface ButtonInterfaces {
  children: string;
  onClick?: () => void;
}

const Button: VFC<ButtonInterfaces> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

Button.defaultProps = {
  children: "버튼",
};

export default Button;
