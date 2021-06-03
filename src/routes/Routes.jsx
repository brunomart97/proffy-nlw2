import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
// import { Main } from "../pages/Main";
// import { Result } from "../pages/Result";

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* <Route path="/" exact component={Main} />
          <Route path="/result" component={Result} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
