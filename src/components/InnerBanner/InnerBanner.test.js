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
  const onCountChange = jest.fn();
  const dispatch = jest.fn();

  it("Simulates search function called", () => {
    const store = mockStore(initialState);

    const wrapper = shallow(
      <Provider store={store}>
        <InnerBanner onCountChange={onCountChange} />
      </Provider>
    );
    wrapper.find("input").simulate("change");
    expect(wrapper.instance().onCountChange).toHaveBeenCalled();
  });

  it("Simulates dispatch on search function", () => {
    const store = mockStore(initialState);

    const wrapper = shallow(
      <Provider store={store}>
        <InnerBanner dispatch={dispatch} />
      </Provider>
    );
    wrapper.find("button").simulate("click");
    expect(wrapper.instance().dispatch).toHaveBeenCalled();
  });

  test("submit button displays", () => {
    const store = mockStore(initialState);

    const wrapper = shallow(
      <Provider store={store}>
        <InnerBanner />
      </Provider>
    );

    const findByTestAttr = (wrapper, val) => {
      return wrapper.find(`[data-test="${val}"]`);
    };
    // test('submit button does not display', () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.exists()).toBe(true);
    // });
  });

  // test('state updates with value of input box upon change', () => {
  //   const inputBox = findByTestAttr(wrapper, 'input-box');
  //   const mockEvent = { target: { value: 'train' } };

  //   inputBox.simulate("change", mockEvent);
  //   expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  // });

  it("matches snapshot", () => {
    const store = mockStore(initialState);

    const wrapper = shallow(
      <Provider store={store}>
        <InnerBanner />
      </Provider>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
