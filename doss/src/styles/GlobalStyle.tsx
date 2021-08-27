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
      `}
    />
  );
};

export default GlobalStyle;
