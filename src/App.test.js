import React from "react";
import toJSON from "enzyme-to-json";
import { mount } from "enzyme";

import App from "./App";

test("App snapshot", () => {
  const wrapper = mount(<App />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
