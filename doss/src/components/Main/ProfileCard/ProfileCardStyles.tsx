import styled from "@emotion/styled";

export const ProfileCardContainer = styled.div`
  padding: 1rem;
  .profile_meta {
    display: flex;
    align-items: center;
  }
  .profile {
    margin: 1rem;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    user-select: none;
  }
  .name {
    font-size: 24px;
    color: #191f28;
    font-weight: bold;
  }
  .remittance {
    width: 120px;
    margin: 0 0 0 auto;
  }
`;
