import Form from "components/Common/Form";
import { VFC } from "react";

interface LoginFormInterfaces {
  onSubmit: () => void;
}

const LoginForm: VFC<LoginFormInterfaces> = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <button>제출</button>
    </Form>
  );
};

export default LoginForm;
