import React from "react";
import { shallow } from "enzyme";
import FormikAddMovie from "./FormikAddMovie";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";

describe("FormikAddMovie", () => {
  const initialState = {};
  const mockStore = configureStore();

  it("calls onSubmit when add formik form submitted", () => {
    const store = mockStore(initialState);
    const onSubmitFn = jest.fn();
    const wrapper = shallow(
      <Provider store={store}>
        <FormikAddMovie onSubmit={onSubmitFn} />
      </Provider>
    );
    wrapper.find(".button-main").simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
