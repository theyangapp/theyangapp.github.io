import React from "react";
import Browser from "./browser/App";
import Mobile from "./mobile/App";
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
    const isMobile = width <= 500;
    return isMobile ? <Mobile /> : <Browser />;
  }
}
