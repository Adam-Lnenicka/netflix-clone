import "jsdom-global/register";
import App from "./App";
import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import { BrowserRouter as Router } from "react-router-dom";

describe("App ", () => {
  const initialState = {};
  const mockStore = configureStore();

  it("App to match snapshot", () => {
    const store = mockStore(initialState);
    const wrapper = shallow(
      <Provider store={store}>
        {/* <Router location="home"> */}
        <App />
        {/* </Router> */}
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("App to match snapshot", () => {
    UseEffect = jest.spyOn("useEffect").mockImplementation((f) => f());
    // const store = mockStore(initialState);
    const props = {
      loadMoviesThunk: () => {},
    };

    expect(props.loadMoviesThunk()).toHaveBeenCalled();
  });
});
