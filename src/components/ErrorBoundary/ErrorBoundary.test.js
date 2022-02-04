import ErrorBoundaryContainer from "./container";
import React from "react";
import { shallow } from "enzyme";

describe("ErrorBoundary ", () => {
  it("Message in component", () => {
    const component = shallow(
      <ErrorBoundaryContainer
        errorName="errorName"
        componentStack="componentStack"
      />
    );
    component.setState({ hasError: true });
    expect(component).toMatchSnapshot();
  });
});
