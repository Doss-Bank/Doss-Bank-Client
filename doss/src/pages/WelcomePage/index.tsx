import { Helmet } from "react-helmet";
import { WelcomePageContainer } from "./pageStyle";
import DossWelcomeVideo from "assets/video/DOSS_welcome.mp4";
import Modal from "components/Common/Modal";
import useToggle from "hooks/useToggle";
import LoginForm from "components/Auth/LoginForm";

function WelcomePage() {
  const [ModalVisible, , openModal, closeModal] = useToggle(false);

  return (
    <>
      <WelcomePageContainer>
        <Helmet title="Doss - 개발이 즐거워지는 순간" />
        <div className="welcome-meta">
          <h1 className="welcome-meta-title">
            금융의 모든 것,
            <br /> 도스에서 쉽고 간편하게
          </h1>
          <button className="welcome-meta-button" onClick={openModal}>
            로그인
          </button>
        </div>
        <video autoPlay loop muted>
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
        <LoginForm
          onSubmit={() => {
            console.log("login submit");
          }}
        />
      </Modal>
    </>
  );
}

export default WelcomePage;
