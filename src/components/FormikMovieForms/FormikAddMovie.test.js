import React from "react";
import { shallow } from "enzyme";
import FormikAddMovie from "./FormikAddMovie";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";

describe("FormikAddMovie", () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const onSubmitFn = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <FormikAddMovie onSubmit={onSubmitFn} />
      </Provider>
    );
  });

  it("FormikAddMovie creates snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("calls onSubmit when add formik form submitted", () => {
    wrapper.find(".button-main").simulate("click");
  });
});
