import loadable from "@loadable/component";

const WelcomePage = loadable(() => import("./WelcomePage"));
const MainPage = loadable(() => import("./MainPage"));
const NotFoundPage = loadable(() => import("./NotFoundPage"));

const pages = {
  WelcomePage,
  NotFoundPage,
  MainPage,
};

export default pages;
