import Button from "components/Common/Button";
import Form from "components/Common/Form";
import Input from "components/Common/Input";
import useInput from "hooks/useInput";
import autoHypenPhone from "utils/autoHypen";

const JoinForm = () => {
  //아이디,비번,닉네임,폰번호,생일
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [checkPassword, onChangeCheckPassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [phoneNumber, onChangePhoneNumber] = useInput("");

  return (
    <Form>
      <Input
        inputTitle="아이디"
        placeholder="아이디를 입력해주세요."
        inputId="1"
        value={id}
        onChange={onChangeId}
      />
      <hr />
      <Input
        inputTitle="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        inputId="2"
        value={password}
        onChange={onChangePassword}
      />
      <Input
        inputTitle="비밀번호 재입력"
        placeholder="비밀번호를 다시 입력해주세요."
        inputId="3"
        value={checkPassword}
        onChange={onChangeCheckPassword}
      />
      <hr />
      <Input
        inputTitle="닉네임"
        placeholder="닉네임을 입력해주세요."
        inputId="4"
        value={nickname}
        onChange={onChangeNickname}
      />
      <hr />
      <Input
        inputTitle="폰 번호"
        placeholder="폰 번호를 입력해주세요."
        inputId="5"
        value={autoHypenPhone(phoneNumber)}
        onChange={onChangePhoneNumber}
      />

      <Button>회원가입</Button>
    </Form>
  );
};

export default JoinForm;
