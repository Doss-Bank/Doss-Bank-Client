import Button from "components/Common/Button";
import Card from "components/Common/Card";
import { ProfileCardContainer } from "./ProfileCardStyles";
import Profile from "assets/images/auth_join.png";

const ProfileCard = () => {
  return (
    <Card>
      <ProfileCardContainer>
        <div className="profile_meta">
          <img
            src={Profile}
            alt="프로필 이미지"
            className="profile"
            draggable={false}
          />
          <h2 className="name">김토스</h2>
          <Button className="remittance">송금</Button>
        </div>
      </ProfileCardContainer>
    </Card>
  );
};

export default ProfileCard;
