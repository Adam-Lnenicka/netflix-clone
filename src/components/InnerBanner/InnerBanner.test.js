import "jsdom-global/register";

import React from "react";
import toJSON from "enzyme-to-json";
import { mount, shallow } from "enzyme";
import InnerBanner from "./InnerBanner";

describe("Inner Bannner shallow wrapper", () => {
  it("Inner Banner matches snapshot", () => {
    const wrapper = shallow(<InnerBanner />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

describe("Inner Banner mount wrapper", () => {
  const mockFunction = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<InnerBanner onCLick={mockFunction} />);
  });

  it("Simulates dispatch on search function", () => {
    wrapper.find("button").simulate("click");
    expect(mockFunction).toBeCalled();
  });

  it("submit button displays", () => {
    const submitButton = wrapper.find(".button-main");
    expect(submitButton.exists()).toBe(true);
  });

  it("state updates with value of input box upon change", () => {
    const inputBox = wrapper.find(".input-box");
    const mockEvent = { target: { value: "input" } };
    inputBox.simulate("change", mockEvent);
  });
});
