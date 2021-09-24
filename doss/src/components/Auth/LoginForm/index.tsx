import { useCallback, useEffect, VFC } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "components/Common/Button";
import Caption from "components/Common/Caption";
import Form from "components/Common/Form";
import Input from "components/Common/Input";
import loginValidator from "utils/loginValidator";
import useInput from "hooks/useInput";
import { useRecoilState } from "recoil";
import { loginRecoilState } from "recoils/Auth/AuthState";
import axios from "axios";

const LoginForm: VFC = () => {
  const { push } = useHistory();

  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [loginState, setLoginState] = useRecoilState(loginRecoilState);

  const handleSubmit = useCallback(() => {
    const loginData = { id, password };
    if (loginValidator(loginData)) {
      //TODO: LOGIN REQUEST
      axios.post("/user/login", loginData).then((response) => {});

      setLoginState({ loginDone: true });
    }
  }, [id, password, setLoginState]);

  useEffect(() => {
    if (!loginState.loginDone) {
      push("/welcome");
    }
  }, [loginState, push]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="아이디를 입력해주세요."
        value={id}
        onChange={onChangeId}
      />
      <Input
        placeholder="비밀번호를 입력해주세요."
        value={password}
        type="password"
        onChange={onChangePassword}
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
