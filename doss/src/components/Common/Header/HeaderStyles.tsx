import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  z-index: 60;
  width: 100%;
  /* background-color: white; */
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(0, 27, 55, 0.1);
  padding: 1rem 0;
  position: fixed;
  .header-content {
    margin: 0 auto;
    max-width: 1200px;
    .logo {
      font-size: 2rem;
      color: rgb(0, 100, 255);
      font-weight: bold;
    }
  }
`;
