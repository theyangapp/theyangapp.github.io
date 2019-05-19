import React, { PureComponent } from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import { View } from "components";
import logo from "assets/logo.png";

const Logo = styled.img`
  width: 32px;
  margin-right: 16px;
`;
const LogoText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.text(0.5)};
`;

const Container = styled(View)`
  position: absolute;
  flex-direction: row;
  min-height: 100px;
  width: 100%;
  padding-left: 64px;
  padding-right: 64px;
  align-items: center;
  /* justify-content: center; */
  box-sizing: border-box;
`;

const LogoContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const Flex = styled.div`
  flex: 1;
`;

class Header extends PureComponent {
  render() {
    return (
      <Container>
        <Link style={{ textDecoration: "none" }} to="/">
          <LogoContainer>
            <Logo src={logo} />
            <LogoText>Camp Tracker</LogoText>
          </LogoContainer>
        </Link>
        {/* <Flex /> */}
        {/* <Link style={{ textDecoration: "none" }} to="/faq">
          <LogoText>Read FAQ</LogoText>
        </Link> */}
      </Container>
    );
  }
}

export default withTheme(Header);
