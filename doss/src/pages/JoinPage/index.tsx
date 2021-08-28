import JoinForm from "components/Auth/JoinForm";
import { Helmet } from "react-helmet";

function JoinPage() {
  return (
    <>
      <Helmet title="도스 - 개발이 즐거워지는 순간" />
      <JoinForm />
    </>
  );
}

export default JoinPage;
