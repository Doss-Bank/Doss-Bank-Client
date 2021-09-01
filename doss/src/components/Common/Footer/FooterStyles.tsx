import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid rgba(0, 27, 55, 0.1);
  padding: 1rem 0;
  background-color: white;
  z-index: 60;
  .active_tab > .menu {
    color: rgb(0, 100, 255) !important;
  }
  .menus {
    display: flex;
    justify-content: space-evenly;
    max-width: 1200px;
    margin: 0 auto;

    .menu {
      color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
