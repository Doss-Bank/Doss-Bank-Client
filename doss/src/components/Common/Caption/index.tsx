import { VFC } from "react";
import { StyledCaption } from "./CaptionStyle";

interface CaptionInterfaces {
  title: string;
  children: React.ReactNode;
  type?: "ERROR" | "NORMAL";
}

const Caption: VFC<CaptionInterfaces> = ({ title, children, type }) => {
  return (
    <StyledCaption captionType={type!}>
      <h1>{title}</h1>
      {children}
    </StyledCaption>
  );
};

Caption.defaultProps = {
  type: "NORMAL",
};

export default Caption;
