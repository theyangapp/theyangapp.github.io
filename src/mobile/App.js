import React, { PureComponent } from "react";
import styled, { withTheme } from "styled-components";
import { View } from "components/";

const Container = styled(View)`
  flex: 1;
`;

class App extends PureComponent {
  render() {
    return <Container />;
  }
}

export default withTheme(App);
