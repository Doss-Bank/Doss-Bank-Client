import Form from "components/Common/Form";
import Input from "components/Common/Input";
import useInput from "hooks/useInput";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { SocialSection } from "./JoinFormStyle";
import ProfileSetting from "./ProfileSetting";
import DefaultProfile from "assets/images/profile_default.png";

const JoinForm: React.VFC = memo(() => {
  const afterSocialRef = useRef<HTMLInputElement>(null);

  const [profileImage, setProfileImage] = useState(DefaultProfile);
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [checkPassword, onChangeCheckPassword] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [beforeSocialNumber, onChangeBeforeSocialNumber] = useInput("");
  const [afterSocialNumber, onChangeAfterSocialNumber] = useInput("");
  const [name, onChangeName] = useInput("");
  const [nickname, onChangeNickname] = useInput("");

  const handleSubmit = useCallback(() => {
    const joinData = {
      profileImage,
      id,
      password,
      checkPassword,
      name,
      nickname,
      socialNumber: beforeSocialNumber + afterSocialNumber,
    };
  }, [
    profileImage,
    afterSocialNumber,
    beforeSocialNumber,
    id,
    name,
    nickname,
    password,
    checkPassword,
  ]);

  useEffect(() => {
    if (beforeSocialNumber.length === 6) {
      if (afterSocialRef.current) {
        afterSocialRef.current.focus();
      }
    }
  }, [beforeSocialNumber]);

  return (
    <Form hasSubmit submitText="회원가입" onSubmit={handleSubmit}>
      <ProfileSetting
        name={name}
        profileImage={profileImage}
        setProfileImage={setProfileImage}
      />
      <Input
        placeholder="아이디를 입력해주세요."
        value={id}
        onChange={onChangeId}
        overlabHandler={() => {}}
      />
      <Input
        placeholder="비밀번호를 입력해주세요."
        value={password}
        onChange={onChangePassword}
      />
      <Input
        placeholder="비밀번호를 다시 입력해주세요."
        value={checkPassword}
        onChange={onChangeCheckPassword}
      />
      <Input
        placeholder="이메일을 입력해주세요. (example@mail.com)"
        value={email}
        onChange={onChangeEmail}
        overlabHandler={() => {}}
      />
      <SocialSection>
        <Input
          type="text"
          maxLength={6}
          className="social_before"
          value={beforeSocialNumber}
          onChange={onChangeBeforeSocialNumber}
          placeholder="주민번호 앞 6자리 + 뒷 1자리"
        />
        <div className="hyphen">-</div>
        <Input
          inputRef={afterSocialRef}
          type="text"
          maxLength={1}
          className="social_after"
          value={afterSocialNumber}
          onChange={onChangeAfterSocialNumber}
        />
        {Array(7)
          .fill("·")
          .map((dot, index) => (
            <div className="dot" key={index}>
              {dot}
            </div>
          ))}
      </SocialSection>
      <Input
        placeholder="이름을 입력해주세요."
        value={name}
        onChange={onChangeName}
      />
      <Input
        placeholder="별명을 입력해주세요."
        value={nickname}
        onChange={onChangeNickname}
      />
    </Form>
  );
});
export default JoinForm;
