import { Helmet } from "react-helmet";
import { WelcomePageContainer } from "./pageStyle";
import DossWelcomeVideo from "assets/video/DOSS_welcome.mp4";

function WelcomePage() {
  return (
    <WelcomePageContainer>
      <Helmet title="Doss - 개발이 즐거워지는 순간" />
      <video autoPlay loop muted>
        <source src={DossWelcomeVideo} type="video/mp4" />
      </video>
    </WelcomePageContainer>
  );
}

export default WelcomePage;
