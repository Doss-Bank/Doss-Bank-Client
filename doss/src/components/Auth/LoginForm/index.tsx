import { useCallback, useEffect, VFC } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginRecoilState } from "recoils/Auth/AuthState";
import Button from "components/Common/Button";
import Caption from "components/Common/Caption";
import Form from "components/Common/Form";
import Input from "components/Common/Input";

const LoginForm: VFC = () => {
  const { push } = useHistory();
  const [loginState, setLoginState] = useRecoilState(loginRecoilState);

  const handleSubmit = useCallback(() => {
    console.log(loginState);
    setLoginState({ loginDone: true });
  }, [loginState, setLoginState]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        inputTitle="아이디"
        placeholder="아이디를 입력해주세요."
        inputId="1"
      />
      <Input
        inputTitle="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        inputId="2"
      />
      <Button>로그인</Button>
      <Caption title="회원이 아니신가요?">
        도스에 가입해서 편리한 전자 금융 서비스를 이용해보세요!
        <Link to="/join">회원가입</Link>
      </Caption>
    </Form>
  );
};

export default LoginForm;
