import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { View } from "components";
import { isIOS } from "react-device-detect";

import screenshot from "assets/screenshot.png";
import cartoon from "assets/cartoon.png";
import ios from "assets/ios.png";
import android from "assets/android.png";

const Container = styled(View)`
  /* flex: 1;
  padding: 32px; */
  align-self: center;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 24px;
  color: ${props => props.theme.text(0.5)};
  margin-bottom: 24px;
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
`;
const StoreImage = styled.img`
  width: 200px;
  margin-bottom: 8px;
`;

class Landing extends Component {
  render() {
    return (
      <Container>
        <View style={{ marginTop: 60, marginBottom: 12 }}>
          {isIOS ? (
            <a
              style={{ marginBottom: 12 }}
              href={
                "https://apps.apple.com/us/app/yang-humanity-first/id1477732890"
              }
            >
              <StoreImage src={ios} />
            </a>
          ) : (
            <a
              href={
                "https://play.google.com/store/apps/details?id=com.jonwu.yang"
              }
            >
              <StoreImage src={android} />
            </a>
          )}
        </View>
        <div style={{ marginBottom: 12, color: "white", fontWeight: "bold" }}>
          ⭐⭐⭐⭐⭐ 5.0 stars
        </div>

        <View>
          <ScreenshotImage src={screenshot} />
        </View>
      </Container>
    );
  }
}

export default withTheme(Landing);
