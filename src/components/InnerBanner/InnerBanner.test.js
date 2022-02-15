import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
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
