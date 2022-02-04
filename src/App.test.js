import App from "./App";
import React from "react";
import { mount } from "enzyme";

describe("App ", () => {
  it("1. To match snapshot", () => {
    const props = {
      routes: "routes",
      handleRoutes: () => {},
    };
    const component = mount(<App {...props} />);
    expect(component).toMatchSnapshot();
  });
});
