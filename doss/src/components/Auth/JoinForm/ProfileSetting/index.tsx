import { useCallback, useRef, useState, VFC } from "react";
import DefaultProfile from "assets/images/profile_default.png";
import { ProfileSettingContainer } from "./ProfileSettingStyles";

interface ProfileSettingProps {
  name: string;
}

const ProfileSetting: VFC<ProfileSettingProps> = ({ name }) => {
  const [profileImage, setProfileImage] = useState(DefaultProfile);
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
    []
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

export default ProfileSetting;
