import JoinForm from "components/Auth/JoinForm";
import { Helmet } from "react-helmet";
import { JoinPageLayout } from "./pageStyle";

function JoinPage() {
  return (
    <>
      <Helmet title="도스 - 개발이 즐거워지는 순간" />
      <JoinPageLayout>
        <h1 className="title">
          금융의 모든 것,
          <br /> 도스에서 쉽고 간편하게 시작하세요.
        </h1>
        <JoinForm />
      </JoinPageLayout>
    </>
  );
}

export default JoinPage;
