import { Helmet } from "react-helmet";
import { WelcomePageContainer } from "./pageStyle";
import DossWelcomeVideo from "assets/video/DOSS_welcome.mp4";
import Modal from "components/Common/Modal";
import useToggle from "hooks/useToggle";
import LoginForm from "components/Auth/LoginForm";
import { useRecoilState } from "recoil";
import { loginRecoilState } from "recoils/Auth/AuthState";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Token from "utils/token";

function WelcomePage() {
  const { push } = useHistory();

  const [loginState, setLoginState] = useRecoilState(loginRecoilState);
  const [ModalVisible, , openModal, closeModal] = useToggle(false);

  useEffect(() => {
    const token = Token.getToken();
    if (token) {
      setLoginState({ loginDone: true });
    }

    if (loginState.loginDone) {
      push("/");
    }
  }, [loginState, push, setLoginState]);

  return (
    <>
      <WelcomePageContainer>
        <Helmet title="도스 - 개발이 즐거워지는 순간" />
        <div className="welcome-meta">
          <h1 className="welcome-meta-title">
            금융의 모든 것,
            <br /> 도스에서 쉽고 간편하게
          </h1>
          <button className="welcome-meta-button" onClick={openModal}>
            로그인
          </button>
        </div>
        <video muted={true} autoPlay loop>
          <source src={DossWelcomeVideo} type="video/mp4" />
        </video>
      </WelcomePageContainer>

      <Modal
        visible={ModalVisible}
        // closable
        width="500px"
        maskClosable
        handleClose={closeModal}
      >
        <LoginForm />
      </Modal>
    </>
  );
}

export default WelcomePage;
