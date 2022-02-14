import React from "react";
import { shallow } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary ", () => {
  it("Message in component", () => {
    const component = shallow(
      <ErrorBoundary errorName="errorName" componentStack="componentStack" />
    );
    component.setState({ hasError: true });
    expect(component).toMatchSnapshot();
  });
});
