import Button from "components/Common/Button";
import Form from "components/Common/Form";
import Input from "components/Common/Input";

const JoinForm = () => {
  return (
    <Form>
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
      <Input
        inputTitle="비밀번호 재입력"
        placeholder="비밀번호를 다시 입력해주세요."
        inputId="3"
      />
      <Button>로그인</Button>
    </Form>
  );
};

export default JoinForm;
