import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import {View} from 'components';

const Container = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.bg(1)};
`

class App extends Component {
  render() {
    return (
      <Container>        
      </Container>
    );
  }
}

export default withTheme(App)