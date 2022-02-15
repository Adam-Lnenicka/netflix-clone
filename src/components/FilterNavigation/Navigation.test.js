import React from "react";
import Navigation from "./Navigation";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

describe("Navigation", () => {
  it("Matches navigation snapshot", () => {
    const wrapper = shallow(<Navigation />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
