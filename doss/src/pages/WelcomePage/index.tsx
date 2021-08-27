import { Helmet } from "react-helmet";
import { WelcomePageContainer } from "./pageStyle";
import DossWelcomeVideo from "assets/video/DOSS_welcome.mp4";
import Modal from "components/Common/Modal";
import useToggle from "hooks/useToggle";

function WelcomePage() {
  const [modalVisible, , openModal, closeModal] = useToggle(false);

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
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable
          maskClosable
          handleClose={closeModal}
        >
          Hello
        </Modal>
      )}
    </>
  );
}

export default WelcomePage;
