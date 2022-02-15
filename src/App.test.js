import "jsdom-global/register";
import App from "./App";
import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("App ", () => {
  const initialState = {};
  const mockStore = configureStore();

  it("App to match snapshot", () => {
    const store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
