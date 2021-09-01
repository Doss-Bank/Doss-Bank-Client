import styled from "@emotion/styled";

interface CardStyleProps {
  themeMode: "LIGHT" | "DARK";
}

export const CardContainer = styled.div<CardStyleProps>`
  border-radius: 15px;
  /* padding: 1rem; */
  overflow: hidden;
  margin: 1rem 0 2rem 0;
  background-color: ${(props) =>
    props.themeMode === "LIGHT" ? "white" : "#191f28"};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
