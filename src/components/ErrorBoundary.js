import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorName: error.toString(),
      componentStack: errorInfo.componentStack,
    });
  }
  render() {
    const { hasError } = this.state;
    return hasError ? "Something " : this.props.children;
  }
}

export default ErrorBoundary;
