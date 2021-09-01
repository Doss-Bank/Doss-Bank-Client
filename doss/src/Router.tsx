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
      <Route exact path="/remittance">
        <pages.RemittancePage />
      </Route>
      <Route exact path="/stock">
        <pages.StockPage />
      </Route>
      <Route exact path="/profile">
        <pages.ProfilePage />
      </Route>
      <Route path="*">
        <pages.NotFoundPage />
      </Route>
    </Switch>
  );
}

export default Router;
