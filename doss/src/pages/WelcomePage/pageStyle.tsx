import styled from "@emotion/styled";

export const WelcomePageContainer = styled.main`
  height: 100vh;
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  .welcome-meta {
    z-index: 1;
    position: fixed;
    top: 20%;
    left: 15%;
    @media (max-width: 768px) {
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &-title {
      font-weight: bold;
      font-size: 48px;
      @media (max-width: 768px) {
        text-align: center;
        font-size: 38px;
      }
    }
    &-button {
      width: 178px;
      height: 71px;
      margin-top: 1rem;
      border-radius: 40px;
      font-size: 22px;
      font-weight: 700;
      line-height: 1.6;
      color: rgb(255, 255, 255);
      background: #3182f6;
      display: flex;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
      &:hover {
        filter: brightness(80%);
      }
    }
  }
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
`;
