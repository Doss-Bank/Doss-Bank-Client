import { VFC } from "react";
import { StyledCaption } from "./CaptionStyle";

interface CaptionInterfaces {
  title: string;
  children: React.ReactNode;
}

const Caption: VFC<CaptionInterfaces> = ({ title, children }) => {
  return (
    <StyledCaption>
      <h1>{title}</h1>
      {children}
    </StyledCaption>
  );
};

export default Caption;
