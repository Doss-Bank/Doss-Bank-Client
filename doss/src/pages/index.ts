import loadable from "@loadable/component";

const MainPage = loadable(() => import("./MainPage"));
const NotFoundPage = loadable(() => import("./NotFoundPage"));

const pages = {
  NotFoundPage,
  MainPage,
};

export default pages;
