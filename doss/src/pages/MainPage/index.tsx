import { Helmet } from "react-helmet";
import { joinRecoilState, loginRecoilState } from "recoils/Auth/AuthState";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import PageLayout from "components/Layout/PageLayout";
import Card from "components/Common/Card";
import ProfileCard from "components/Main/ProfileCard";

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
        <Card>계좌 리스트</Card>
      </PageLayout>
    </>
  );
}

export default MainPage;
