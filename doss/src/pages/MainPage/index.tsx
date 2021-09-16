import { Helmet } from "react-helmet";
import { loginRecoilState } from "recoils/Auth/AuthState";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import PageLayout from "components/Layout/PageLayout";
import ProfileCard from "components/Main/ProfileCard";
import AccountCard from "components/Main/AccountCard";

function MainPage() {
  const { push } = useHistory();

  const loginState = useRecoilValue(loginRecoilState);

  useEffect(() => {
    if (!loginState.loginDone) {
      push("/welcome");
    }
  }, [loginState, push]);

  return (
    <>
      <Helmet title="도스 - 개발이 즐거워지는 순간" />
      <PageLayout>
        <ProfileCard />
        <AccountCard />
      </PageLayout>
    </>
  );
}

export default MainPage;
