import React from "react";

import Landing from "browser/Landing";
import Faq from "browser/Faq";
import Header from "browser/Header";

import { createGlobalStyle, withTheme } from "styled-components";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "components";

const routes = [
  {
    path: "/",
    component: Landing
  }
  // {
  //   path: "/faq",
  //   component: Faq
  // }
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
