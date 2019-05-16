import React from 'react';
import Browser from './browser/App';
import Mobile from './mobile/App';
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux';

class Platform extends React.Component {
  state = {
    width: window.innerWidth
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const { theme } = this.props;
    console.log(theme)
    const isMobile = width <= 500;
    return <ThemeProvider theme={theme}>
      {isMobile ? <Mobile /> : <Browser />}
    </ThemeProvider>
  }
}

function mapStateToProps(state) {
  return {
    theme: state.settings.theme,
  };
}

export default connect(
  mapStateToProps
)(Platform);