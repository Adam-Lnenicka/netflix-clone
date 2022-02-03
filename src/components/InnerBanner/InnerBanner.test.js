import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import InnerBanner from "./InnerBanner";

test("snapshot of InnerBanner", () => {
  const wrapper = shallow(<InnerBanner />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
