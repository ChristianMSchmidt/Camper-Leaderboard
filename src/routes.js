import React from "react";
import { Route, IndexRedirect } from "react-router";

/* Import the Components */
import Layout from "./components/Layout.js";
import LeaderboardTable from "./components/Table.js";
import NotFoundPage from "./components/404.js";

const routes = (
  <Route path="/" component={Layout}>
      <IndexRedirect to="/leaderboard" />
      <Route path = "leaderboard" component={LeaderboardTable} />
      <Route path ="*" component={NotFoundPage} />
  </Route>
);

module.exports = routes;