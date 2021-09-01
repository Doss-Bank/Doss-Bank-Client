import styled from "@emotion/styled";

interface CaptionInterfaces {
  captionType: "ERROR" | "NORMAL";
}

export const StyledCaption = styled.caption<CaptionInterfaces>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${(props) =>
    props.captionType === "ERROR" ? "#ffcdd2" : "#e2e4e6"};
  margin: 1rem 0;
  h1 {
    color: rgb(51, 61, 75);
    font-weight: bold;
  }
  color: rgb(78, 89, 104);
`;
