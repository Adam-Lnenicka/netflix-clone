import "jsdom-global/register";

import React from "react";
import toJSON from "enzyme-to-json";
import { mount, shallow } from "enzyme";
import InnerBanner from "./InnerBanner";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Inner Banner", () => {
  const initialState = {};
  const mockStore = configureStore();
  const mockFunction = jest.fn();

  it("Simulates dispatch on search function", () => {
    const store = mockStore(initialState);

    const wrapper = mount(
      // <Provider store={store}>
      <InnerBanner onCLick={mockFunction} />
      // </Provider>
    );
    wrapper.find("button").simulate("click");
    expect(mockFunction).toBeCalled();
  });

  it("submit button displays", () => {
    // const store = mockStore(initialState);

    const wrapper = mount(
      // <Provider store={store}>
      <InnerBanner />
      // </Provider>
    );

    const submitButton = wrapper.find(".button-main");
    expect(submitButton.exists()).toBe(true);
    // });
  });

  it("state updates with value of input box upon change", () => {
    const wrapper = mount(
      // <Provider store={store}>
      <InnerBanner />
      // </Provider>
    );

    const inputBox = wrapper.find(".input-box");
    const mockEvent = { target: { value: "input" } };

    inputBox.simulate("change", mockEvent);
  });

  it("matches snapshot", () => {
    // const store = mockStore(initialState);

    const wrapper = shallow(
      // <Provider store={store}>u
      <InnerBanner />
      // </Provider>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
