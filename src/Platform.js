import React from "react";
import Browser from "./browser/Root";
import Mobile from "./mobile/Root";
export default class Platform extends React.Component {
  state = {
    width: window.innerWidth
  };
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 900;
    return isMobile ? <Mobile /> : <Browser />;
  }
}
