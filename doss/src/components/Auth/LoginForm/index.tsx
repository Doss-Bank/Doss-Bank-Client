import { VFC } from "react";
import { Link } from "react-router-dom";
import Button from "components/Common/Button";
import Caption from "components/Common/Caption";
import Form from "components/Common/Form";
import Input from "components/Common/Input";

const LoginForm: VFC = () => {
  return (
    <Form onSubmit={() => {}}>
      <Input placeholder="아이디를 입력해주세요." />
      <Input placeholder="비밀번호를 입력해주세요." />
      <Button>로그인</Button>
      <Caption title="회원이 아니신가요?">
        도스에 가입해서 편리한 전자 금융 서비스를 이용해보세요!
        <Link to="/join">회원가입</Link>
      </Caption>
    </Form>
  );
};

export default LoginForm;
