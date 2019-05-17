import React, { Component } from "react";
import styled, { withTheme, createGlobalStyle } from "styled-components";
import { View } from "components/";
import screenshot from "assets/screenshot.png";
import ios from "assets/ios.png";
import android from "assets/android.png";
import logo from "assets/logo.png";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${props => props.theme.bg(1)};
  }
`;

const Container = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.bg(1)};
  align-items: center;
  justify-content: center;
`;

const ContentView = styled(View)`
  flex-direction: row;
`;
const LeftView = styled(View)`
  width: 440px;
`;
const Title = styled.div`
  font-size: 64px;
  color: ${props => props.theme.text(0.5)};
  margin-bottom: 64px;
`;
const BoldText = styled.span`
  font-weight: bold;
  color: ${props => props.theme.text(1)};
`;

const RedText = styled.span`
  font-weight: bold;
  color: ${props => props.theme.red(1)};
`;

const ScreenshotImage = styled.img`
  height: 641px;
  margin-right: 64px;
`;
const StoreImage = styled.img`
  width: 137px;
  margin-bottom: 8px;
`;

const Logo = styled.img`
  width: 32px;
  margin-right: 16px;
`;
const LogoText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.text()};
`;

const Header = styled(View)`
  position: absolute;
  width: 100%;
  top: 0;
  flex-direction: row;
  height: 100px;
  width: 100%;
  padding-left: 64px;
  padding-right: 64px;
  align-items: center;
  box-sizing: border-box;
`;

const Flex = styled.div`
  flex: 1;
`;
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header>
          <Logo src={logo} />
          <LogoText>Camp Tracker</LogoText>
          <Flex />
          <LogoText>Read FAQ</LogoText>
        </Header>
        <Container>
          <ContentView>
            <ScreenshotImage src={screenshot} />
            <LeftView>
              <Title>
                A <BoldText>ridiculously easy</BoldText> way <br />
                to snatch <br />
                <RedText>
                  {" "}
                  last
                  <br /> minute campsites
                </RedText>
              </Title>
              <StoreImage src={ios} />
              <StoreImage src={android} />
            </LeftView>
          </ContentView>
        </Container>
      </React.Fragment>
    );
  }
}

export default withTheme(App);
