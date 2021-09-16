import styled from "@emotion/styled";

export const ProfileSettingContainer = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .change_profile {
    background-color: #ddebfc;
    color: #4593fc;
    padding: 0.5rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
  .profile {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
`;
