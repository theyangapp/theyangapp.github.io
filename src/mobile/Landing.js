import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { View } from "components";

import screenshot from "assets/screenshot.png";
import ios from "assets/ios.png";
import android from "assets/android.png";

const Container = styled(View)`
  flex: 1;
  padding: 32px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

const Content = styled(View)`
  align-self: center;
  align-items: center;
  z-index: 2;
`;

const Title = styled.div`
  font-size: 32px;
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
  position: absolute;
  height: 641px;
  opacity: 0.2;
`;
const StoreImage = styled.img`
  width: 137px;
  margin-bottom: 8px;
`;

class Landing extends Component {
  render() {
    return (
      <Container>
        <ScreenshotImage src={screenshot} />
        <Content>
          <Title>
            A{" "}
            <BoldText>
              ridiculously
              <br />
              easy
            </BoldText>{" "}
            way <br />
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
          >
            <StoreImage src={ios} />
          </a>
          <a
            href={
              "https://play.google.com/store/apps/details?id=com.jonwu.camptracker"
            }
          >
            <StoreImage src={android} />
          </a>
        </Content>
      </Container>
    );
  }
}

export default withTheme(Landing);
