import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import FilterNavigation from "../../components/FilterNavigation/FilterNavigation";

test("snapshot", () => {
  const wrapper = shallow(<FilterNavigation />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
