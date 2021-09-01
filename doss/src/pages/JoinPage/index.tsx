import JoinForm from "components/Auth/JoinForm";
import { Helmet } from "react-helmet";
import { JoinPageLayout } from "./pageStyle";
import SecureImage from "assets/images/secure.webp";

function JoinPage() {
  return (
    <>
      <Helmet title="도스 - 개발이 즐거워지는 순간" />
      <JoinPageLayout>
        <img src={SecureImage} alt="" />
        <JoinForm />
      </JoinPageLayout>
    </>
  );
}

export default JoinPage;
