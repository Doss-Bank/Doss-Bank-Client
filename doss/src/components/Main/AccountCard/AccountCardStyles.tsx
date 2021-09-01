import styled from "@emotion/styled";

export const AccountCardContainer = styled.div`
  .account_header {
    padding: 10px;
    transition: ease-in-out 0.2s;
    cursor: pointer;
    user-select: none;
    &_title {
      display: flex;
      justify-content: space-between;
      font-size: 28px;
      font-weight: bold;
      &::after {
        display: flex;
        height: 100%;
        align-items: center;
        content: ">";
      }
    }

    &:hover {
      background-color: #f2f2f5;
    }
  }

  .account {
    padding: 1rem;
  }
  .account_list {
    display: flex;
    flex-direction: column;
  }
`;
