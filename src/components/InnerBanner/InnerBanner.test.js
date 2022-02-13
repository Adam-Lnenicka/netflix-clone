import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import InnerBanner from "./InnerBanner";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Inner Banner", () => {
  const initialState = {};
  const mockStore = configureStore();
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
