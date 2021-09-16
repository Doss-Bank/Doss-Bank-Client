import styled from "@emotion/styled";

export const StyledJoinSection = styled.section`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px;
  display: flex;
`;

export const SocialSection = styled.div`
  display: flex;

  .social_before {
    width: 45%;
  }
  .hyphen {
    margin: 0 1rem;
    display: flex;
    align-items: center;
    font-size: 40px;
  }
  .social_after input {
    width: 40px;
  }
  .dot {
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
  }
`;
