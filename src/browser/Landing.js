import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { View } from "components";

import screenshot from "assets/screenshot.png";
import ios from "assets/ios.png";
import android from "assets/android.png";

const Container = styled(View)`
  flex: 1;
  align-self: center;
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

class Landing extends Component {
  render() {
    return (
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
            <a
              href={
                "https://itunes.apple.com/us/app/rv-camp-tracker/id1422499999"
              }
              target={"_blank"}
            >
              <StoreImage src={ios} />
            </a>
            <a
              href={
                "https://play.google.com/store/apps/details?id=com.jonwu.camptracker"
              }
              target={"_blank"}
            >
              <StoreImage src={android} />
            </a>
          </LeftView>
        </ContentView>
      </Container>
    );
  }
}

export default withTheme(Landing);
