import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

class Theme extends PureComponent {
  render() {
    const { theme } = this.props;
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }
}

function mapStateToProps(state) {
  return {
    theme: state.settings.theme
  };
}

export default connect(mapStateToProps)(Theme);
