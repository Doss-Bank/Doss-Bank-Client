import Form from "components/Common/Form";
import Input from "components/Common/Input";
import { VFC } from "react";

interface LoginFormInterfaces {
  onSubmit: () => void;
}

const LoginForm: VFC<LoginFormInterfaces> = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
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
    </Form>
  );
};

export default LoginForm;
