import { useHistory } from "react-router-dom";
import { HeaderContainer } from "./HeaderStyles";

const Header = () => {
  const { push } = useHistory();

  return (
    <HeaderContainer>
      <div className="header-content">
        <h1 className="logo" onClick={() => push("/")}>
          doss
        </h1>
      </div>
    </HeaderContainer>
  );
};

export default Header;
