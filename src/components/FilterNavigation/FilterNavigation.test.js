import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import FilterNavigation from "./FilterNavigation";

describe("FilterNavigation", () => {
  const dispatch = jest.fn();
  const initialState = {};
  const mockStore = configureStore();
  it("matches snapshot", () => {
    const store = mockStore(initialState);

    const wrapper = shallow(
      <Provider store={store}>
        <FilterNavigation />{" "}
      </Provider>
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("dispatch triggered on click", () => {
    const store = mockStore(initialState);

    const wrapper = shallow(
      <Provider store={store}>
        <FilterNavigation onClick={dispatch} />{" "}
      </Provider>
    );
    wrapper.find("button").simulate("click");
    expect(wrapper).toHaveBeenCalled();
  });
});
