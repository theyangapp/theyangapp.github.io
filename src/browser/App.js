import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import {View} from 'components';
import header from 'assets/camptracker.png';

const Container = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.bg(1)};
  align-items: center;
`
const Title = styled.div`
  font-size: ${props => props.theme.H1};
  color: ${props => props.theme.text()};
`
const HeaderImage = styled.img`
  height: 500px;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Title>Camp Tracker</Title>
        <HeaderImage src={header} />
      </Container>
    );
  }
}

export default withTheme(App)