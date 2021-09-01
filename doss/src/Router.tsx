import { Route, Switch } from "react-router-dom";
import pages from "pages";

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <pages.MainPage />
      </Route>
      <Route exact path="/welcome">
        <pages.WelcomePage />
      </Route>
      <Route exact path="/join">
        <pages.JoinPage />
      </Route>
      <Route exact path="/remittance" />
      <Route exact path="/stock" />
      <Route exact path="/profile" />
      <Route path="*">
        <pages.NotFoundPage />
      </Route>
    </Switch>
  );
}

export default Router;
