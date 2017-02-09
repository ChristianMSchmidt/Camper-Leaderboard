import React from "react";
import { Route, IndexRoute } from "react-router";

/* Import the Components */
import Layout from "./components/Layout.js";
import LeaderboardTable from "./components/Table.js";
import NotFoundPage from "./components/NotFoundPage.js";

const routes = (
  <Route path="/Camper-Leaderboard/" component={Layout}>
      <IndexRoute component={LeaderboardTable} />
      <Route path ="/Camper-Leaderboard/*" component={NotFoundPage} />
  </Route>
);

module.exports = routes;