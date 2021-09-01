import loadable from "@loadable/component";

const WelcomePage = loadable(() => import("./WelcomePage"));
const MainPage = loadable(() => import("./MainPage"));
const NotFoundPage = loadable(() => import("./NotFoundPage"));
const JoinPage = loadable(() => import("./JoinPage"));
const RemittancePage = loadable(() => import("./RemittancePage"));
const StockPage = loadable(() => import("./StockPage"));
const ProfilePage = loadable(() => import("./ProfilePage"));

const pages = {
  WelcomePage,
  NotFoundPage,
  MainPage,
  JoinPage,
  RemittancePage,
  StockPage,
  ProfilePage,
};

export default pages;
