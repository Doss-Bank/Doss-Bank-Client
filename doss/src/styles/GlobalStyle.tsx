import { css, Global } from "@emotion/react";
import emotionResetCSS from "emotion-reset";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionResetCSS}
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          font-family: "Noto Sans KR", sans-serif;
        }
        body {
          margin: 0px;
          padding: 0px;
          min-height: 100vh;
          min-height: -webkit-fill-available;
        }
        html {
          height: -webkit-fill-available;
        }

        a {
          border-radius: 5px;
          color: #3182f6;
          padding: 8px 5px;
          cursor: pointer;
          font-size: inherit;
          white-space: nowrap;
          display: inline-flex;
          -webkit-appearance: none;
          transition: background-color 0.2s ease;
          text-decoration: none;
          &:hover {
            background-color: #ddebfc;
          }
          &::after {
            content: " >";
            margin-left: 10px;
          }
        }
      `}
    />
  );
};

export default GlobalStyle;
