import loadable from "@loadable/component";

const WelcomePage = loadable(() => import("./WelcomePage"));
const MainPage = loadable(() => import("./MainPage"));
const NotFoundPage = loadable(() => import("./NotFoundPage"));
const JoinPage = loadable(() => import("./JoinPage"));

const pages = {
  WelcomePage,
  NotFoundPage,
  MainPage,
  JoinPage,
};

export default pages;
