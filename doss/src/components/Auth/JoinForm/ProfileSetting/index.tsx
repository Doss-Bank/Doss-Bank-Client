import { useCallback, useRef, memo, VFC } from "react";

import { ProfileSettingContainer } from "./ProfileSettingStyles";

interface ProfileSettingProps {
  name: string;
  profileImage: string;
  setProfileImage: (imageURL: string) => void;
}

const ProfileSetting: VFC<ProfileSettingProps> = ({
  name,
  profileImage,
  setProfileImage,
}) => {
  const profileRef = useRef<HTMLInputElement | null>(null);

  const handleClickChangeProfile = useCallback(() => {
    if (profileRef.current) {
      profileRef.current.click();
    }
  }, [profileRef]);

  const handleChangeProfile = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target as HTMLInputElement;

      if (input!.files) {
        setProfileImage(URL.createObjectURL(input!.files[0]));
      }
    },
    [setProfileImage]
  );

  return (
    <ProfileSettingContainer>
      <img src={profileImage} alt="" className="profile" />
      {name.trim() ? `${name}님 반가워요` : "당신의 이름은 무엇인가요?"}
      <input
        type="file"
        ref={profileRef}
        hidden
        onChange={handleChangeProfile}
      />
      <button className="change_profile" onClick={handleClickChangeProfile}>
        프로필 사진 변경
      </button>
    </ProfileSettingContainer>
  );
};

export default memo(ProfileSetting);
