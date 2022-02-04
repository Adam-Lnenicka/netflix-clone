import ErrorBoundaryComponent from "./component";
import React from "react";
import { mount } from "enzyme";

describe("ErrorComponent ", () => {
  it("Match Snapshot", () => {
    const props = {
      errorName: "errorName",
      componentStack: "componentStack",
    };
    const component = mount(<ErrorBoundaryComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
