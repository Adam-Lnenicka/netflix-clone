import React, { Component } from "react";
import ErrorBoundaryComponent from "./component";

interface State {
  hasError: boolean;
}
class ErrorBoundary extends Component<State> {
  state: State = { hasError: false };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorName: error.toString(),
      componentStack: errorInfo.componentStack,
    });
  }
  render() {
    const { errorName, componentStack, hasError } = this.state;
    return hasError ? (
      <ErrorBoundaryComponent
        errorName={errorName}
        componentStack={componentStack}
      />
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
