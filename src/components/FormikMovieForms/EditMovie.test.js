import "jsdom-global/register";

import React from "react";
import { mount } from "enzyme";
import FormikAddMovie from "./FormikAddMovie";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";

describe("FormikEditMovie", () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const handleSubmit = jest.fn();
  const props = {
    validationSchema: () => {},
    onSubmit: () => {},
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
        <FormikAddMovie onClick={handleSubmit} {...props} />
      </Provider>
    );
  });

  it("Formik EditMovie matches snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Submit Button exists", () => {
    const submitButton = wrapper.find(".button-main");
    expect(submitButton.exists()).toBe(true);
  });

  it("Submit button does not exist", () => {
    const submitButton = wrapper.find(".button-main");
    expect(submitButton.exists()).toBe(false);
  });

  it("validates model on button click", () => {
    const instance = wrapper.instance();
    const submitBtn = wrapper.find(".button-main");
    submitBtn.simulate("click");
    expect(instance.handleSubmit).toHaveBeenCalled();
  });
});
