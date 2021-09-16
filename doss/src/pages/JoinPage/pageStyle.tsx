import styled from "@emotion/styled";

export const JoinPageLayout = styled.main`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  img {
    width: 200px;
  }
  & > form {
    width: 600px;
  }
  .title {
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 38px;
    }
  }
`;
