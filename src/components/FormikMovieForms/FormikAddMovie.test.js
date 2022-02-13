import React from "react";
import { shallow } from "enzyme";

import FormikAddMovie from "./FormikAddMovie";
import { describe } from "jest-circus";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { Formik } from "formik";

describe("", () => {
  const initialState = {};
  const mockStore = configureStore();

  it("calls onSubmit when form submitted", () => {
    const store = mockStore(initialState);
    const onSubmitFn = jest.fn();
    const wrapper = shallow(
      <Provider store={store}>
        <FormikAddMovie onSubmit={onSubmitFn} />
      </Provider>
    );
    wrapper.find(Formik).simulate("submit");
    expect(onSubmitFn).toHaveBeenCalled();
  });
});
