import React from "react";

import Landing from "mobile/Landing";
import Header from "mobile/Header";

import { createGlobalStyle, withTheme } from "styled-components";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "components";

const routes = [
  {
    path: "/",
    component: Landing
  }
];

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${props => props.theme.bg(1)};
  }
  #root {
    display: flex;
    flex-direction: column;
  }
`;

const Root = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default withTheme(Root);
