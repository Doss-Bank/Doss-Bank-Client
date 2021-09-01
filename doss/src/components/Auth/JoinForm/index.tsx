import Button from "components/Common/Button";
import Form from "components/Common/Form";
import Input from "components/Common/Input";
import useInput from "hooks/useInput";
import Caption from "components/Common/Caption";
import { StyledJoinSection } from "./JoinFormStyle";
import { useCallback, useEffect, useState } from "react";
import joinValidator from "utils/joinValidator";
import { joinRecoilState } from "recoils/Auth/AuthState";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

const JoinForm = () => {
  const { push } = useHistory();

  const [joinState, setJoinState] = useRecoilState(joinRecoilState);

  //아이디,비번,닉네임,폰번호,생일
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [checkPassword, onChangeCheckPassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [phoneNumber, _, setPhoneNumber] = useInput("");
  const onChangePhoneNumber = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const re = /^[0-9\b]+$/;

      if (event.target.value === "" || re.test(event.target.value)) {
        setPhoneNumber(event.target.value);
      }
    },
    [setPhoneNumber]
  );

  const [hasValidateError, setHasValidateError] = useState<string | null>("");

  const handleJoinSubmit = useCallback(() => {
    const joinData = {
      id,
      password,
      checkPassword,
      nickname,
      phoneNumber,
    };

    const errorMessage = joinValidator(joinData);
    setHasValidateError(errorMessage);
  }, [id, password, checkPassword, nickname, phoneNumber]);

  useEffect(() => {
    if (hasValidateError === null) {
      setJoinState({ joinDone: true });
    }
  }, [hasValidateError, setJoinState]);

  useEffect(() => {
    if (joinState.joinDone) {
      push("/");
    }
  }, [joinState, push]);

  return (
    <Form onSubmit={handleJoinSubmit}>
      <StyledJoinSection>
        <Input
          inputTitle="아이디"
          placeholder="아이디를 입력해주세요."
          inputId="1"
          value={id}
          onChange={onChangeId}
        />
      </StyledJoinSection>
      <StyledJoinSection>
        <Input
          inputTitle="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          inputId="2"
          value={password}
          onChange={onChangePassword}
          type="password"
        />
        <Input
          inputTitle="비밀번호 재입력"
          placeholder="비밀번호를 다시 입력해주세요."
          inputId="3"
          value={checkPassword}
          onChange={onChangeCheckPassword}
          type="password"
        />
      </StyledJoinSection>
      <StyledJoinSection>
        <Input
          inputTitle="닉네임"
          placeholder="닉네임을 입력해주세요."
          inputId="4"
          value={nickname}
          onChange={onChangeNickname}
        />
      </StyledJoinSection>
      <StyledJoinSection>
        <Input
          inputTitle="폰 번호"
          placeholder="폰 번호를 입력해주세요."
          inputId="5"
          value={phoneNumber}
          onChange={onChangePhoneNumber}
        />
      </StyledJoinSection>
      {hasValidateError && (
        <StyledJoinSection>
          <Caption title="인증 오류" type="ERROR">
            <div className="caption_error">{hasValidateError}</div>
          </Caption>
        </StyledJoinSection>
      )}
      <Button>회원가입</Button>
    </Form>
  );
};

export default JoinForm;
