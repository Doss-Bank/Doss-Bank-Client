import Card from "components/Common/Card";
import List from "components/Common/List";
import AccountItem from "../AccountItem";
import { AccountCardContainer } from "./AccountCardStyles";

const AccountCard = () => {
  return (
    <Card>
      <AccountCardContainer>
        <header className="account_header">
          <h1 className="account_header_title">계좌</h1>
          <p>도스에 연동된 계좌들을 한눈에 살펴보세요.</p>
        </header>
        <main className="account">
          <List
            className="account_list"
            items={[
              {
                accountName: "농협",
              },
              {
                accountName: "토스",
              },
              {
                accountName: "토스",
              },
              {
                accountName: "토스",
              },
            ]}
            renderItems={(_, index) => (
              <AccountItem key={index}>{_.accountName}</AccountItem>
            )}
          />
        </main>
      </AccountCardContainer>
    </Card>
  );
};

export default AccountCard;
