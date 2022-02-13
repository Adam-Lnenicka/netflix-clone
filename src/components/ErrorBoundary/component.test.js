import ErrorBoundaryComponent from "./component";
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("ErrorComponent ", () => {
  it("Match Snapshot", () => {
    const props = {
      errorName: "errorName",
      componentStack: "componentStack",
    };
    const wrapper = shallow(<ErrorBoundaryComponent {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
