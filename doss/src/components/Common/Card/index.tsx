import { FC } from "react";
import { CardContainer } from "./CardStyles";

interface CardInterfaces {
  className?: string;
  theme?: "LIGHT" | "DARK";
}

const Card: FC<CardInterfaces> = ({ children, className, theme }) => {
  return (
    <CardContainer className={className} themeMode={theme ?? "LIGHT"}>
      {children}
    </CardContainer>
  );
};

export default Card;
