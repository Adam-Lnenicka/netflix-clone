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
    expect(mockFunction).toBeCalle();
  });

  it("submit button displays", () => {
    // const store = mockStore(initialState);

    const wrapper = mount(
      // <Provider store={store}>
      <InnerBanner />
      // </Provider>
    );

    const findByTestAttr = (wrapper, val) => {
      return wrapper.find(`[data-test="${val}"]`);
    };
    // test('submit button does not display', () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.exists()).toBe(true);
    // });
  });

  it("state updates with value of input box upon change", () => {
    const wrapper = mount(
      // <Provider store={store}>
      <InnerBanner />
      // </Provider>
    );
    const findByTestAttr = (wrapper, val) => {
      return wrapper.find(`[data-test="${val}"]`);
    };
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "input" } };

    inputBox.simulate("change", mockEvent);
    // expect(mockSetCurrentGuess).toHaveBeenCalledWith("input");
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
