import Footer from "components/Common/Footer";
import Header from "components/Common/Header";
import { FC } from "react";
import { PageMain } from "./PageLayoutStyles";

const PageLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <PageMain>{children}</PageMain>
      <Footer />
    </>
  );
};

export default PageLayout;
