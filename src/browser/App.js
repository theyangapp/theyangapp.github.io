import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components'
import {View} from 'components';

const Container = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.red(1)};
`

class App extends Component {
  render() {
    return (
      <Container>
        hi
      </Container>
    );
  }
}

export default withTheme(App)