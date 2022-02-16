import "jsdom-global/register";

import React from "react";
import { mount, shallow } from "enzyme";
import FormikAddMovie from "./FormikAddMovie";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";

describe("FormikAddMovie", () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const onSubmitFn = jest.fn();
  const props = {
    title: "test-title",
    path: "test-path",
    id: "my-id",
    myErrors: "test-errors",
    myTouched: "test-touched",
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <FormikAddMovie onSubmit={onSubmitFn} {...props} />
      </Provider>
    );
  });

  it("calls onSubmit when add formik form submitted", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("calls onSubmit when add formik form submitted", () => {
    const submitButton = wrapper.find(".button-main").simulate("click");
    expect(submitButton.exists()).toBe(true);
  });
});